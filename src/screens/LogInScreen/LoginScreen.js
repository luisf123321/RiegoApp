import React, {useState} from 'react';
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
import {useForm, Controller} from 'react-hook-form';


const LoginScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onLogInPressed = async data => {
        if (loading) {
            return;
        }

        setLoading(true);
        /*
        try {
            const response = await Auth.signIn(data.username, data.password);
            console.log(response);
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
        */
        setLoading(false);
    };

    

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
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
