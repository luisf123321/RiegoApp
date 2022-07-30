import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthButton from '../AuthButton';
import Mapa from '../Mapa';
const Card = (props) => {

    
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Text><Text style={styles.text}>Nombre: </Text>{props.item.nombre}</Text>
            <Text><Text style={styles.text}>Direccion: </Text>{props.item.direccion}</Text>
            <Text><Text style={styles.text}>Latitud: </Text>{props.item.latidud}</Text>
            <Text><Text style={styles.text}>Longitud: </Text>{props.item.longitud}</Text>
            <View style={styles.mapa}>
                <Mapa lat={props.item.latidud} long={props.item.longitud} />            
            </View>            
            <AuthButton onPress={()=>{navigation.navigate(props.ruta,props.item)}} text={props.text} /> 
            <AuthButton onPress={()=>{navigation.navigate(props.ruta2,props.item)}} text={props.text2} />            
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        
        margin:10,
        padding:10,
        backgroundColor:"#E5E4E0",
        borderRadius:5,
        borderWidth:2,
        borderColor:"#3B3FE7"
    },
    text:{
        fontWeight: 'bold',
        fontSize:15,
    },
    mapa:{
        height:"50%",
    }
})

export default Card;
