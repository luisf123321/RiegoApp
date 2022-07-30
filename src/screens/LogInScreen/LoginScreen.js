import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TextInput,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/logo.png'
import AuthInput from '../../components/AuthInput';
import AuthButton from '../../components/AuthButton';
import { useForm, Controller } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const storeToken = async (value) => {
        try {
            await AsyncStorage.setItem('token', value);
            
        } catch (e) {
            Alert.alert(e);
        }
      }

    const onLogInPressed = async data => {
        if (loading) {
            return;
        }
        console.warn("login");

        setLoading(true);
        let _datos = {
            username: data.username,
            password: data.password
        }
       
        fetch('https://riegoback.herokuapp.com/auth/login', {
            method: "POST",
            body: JSON.stringify(_datos),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {                
                storeToken(json.access_token)
                navigation.navigate('Finca');
                
            })
            .catch(err => {
                console.log(err);
                Alert.alert(err)
            });

        setLoading(false);

    };



    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SingUp');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    style={[styles.logo, { height: height * 0.3 }]}
                    resizeMode="contain"
                />

                <AuthInput
                    name="username"
                    placeholder="Username"
                    control={control}
                    rules={{ required: 'Username is required' }}
                />

                <AuthInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 3,
                            message: 'Password should be minimum 3 characters long',
                        },
                    }}
                />

                <AuthButton
                    text={loading ? 'Loading...' : 'Sign In'}
                    onPress={handleSubmit(onLogInPressed)}
                />

                <AuthButton
                    text="Forgot password?"
                    onPress={onForgotPasswordPressed}
                    type="TERTIARY"
                />

                <AuthButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPress}
                    type="TERTIARY"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default LoginScreen;
