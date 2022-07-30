import React, {useEffect, useState} from 'react';
import {View,Text, StyleSheet} from 'react-native';
import Http from '../../libs/Http';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const FincaDetailScreem = (props) => {

    const [token, setToken] = useState('');
    const [dataInfo, setDataInfo] = useState({});
    const navigation = useNavigation();
    const [finca, setfinca] = useState({});

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
        const getFincasById = async () => {
            console.log("********************************* detalle ")
            console.log(props.route.params.id);
            //const finca = props.route.params;
            //setfinca({finca})
            let value = await getUserToken();
            console.log(value)
            let json = await Http.instance.get("https://riegoback.herokuapp.com/finca/"+props.route.params.id, value);
            console.log(json)
            if (json !== null) {
                setDataInfo(json);
            }
        }
        getFincasById().catch(console.error)
    }, []);

    return (
        <View style={styles.root}>
            <Text><Text style={styles.text}>Nombre: </Text>{dataInfo.nombre}</Text>
            <Text><Text style={styles.text}>Direccion: </Text>{dataInfo.direccion}</Text>
            <Text><Text style={styles.text}>Latitud: </Text>{dataInfo.latidud}</Text>
            <Text><Text style={styles.text}>Longitud: </Text>{dataInfo.longitud}</Text>  
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        padding:5,
        margin:5
    },
    text:{
        fontWeight: 'bold',
        fontSize:15,
    }
})

export default FincaDetailScreem;
