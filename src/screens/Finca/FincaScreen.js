import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import Http from '../../libs/Http';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Card from '../../components/Card';
const FincaScreen = () => {

    const [token, setToken] = useState('');
    const [data, setData] = useState(null);

    const getUserToken = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            if (value !== null) {
                setToken(value);
            }

            return value;
            
        } catch (e) {
            // error reading value
        }
    }
    useEffect(() => {
        // Your code here
        const getFincasByUser = async () => {
            let value = await getUserToken();
            console.log(value)
            let json = await Http.instance.get("https://riegoback.herokuapp.com/finca/user/25", value);
            console.log("*********************************")
            console.log(json)
            if (json !== null) {
                setData(json);
            }
        }
        getFincasByUser().catch(console.error)
    }, []);
    return (
        <View>
            <Text>fincas</Text>
            <FlatList 
                data={data}
                renderItem={({ item }) =>
                    <Card
                    item={item}/>
                }
             />
        </View>
    );
}

const styles = StyleSheet.create({})

export default FincaScreen;
