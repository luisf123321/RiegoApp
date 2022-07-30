import React from 'react';
import {View, Text,StyleSheet} from 'react-native';

const Card = ({item}) => {
    return (
        <View style={styles.root}>
            <Text><Text style={styles.text}>Nombre: </Text>{item.nombre}</Text>
            <Text><Text style={styles.text}>Direccion: </Text>{item.direccion}</Text>
            <Text><Text style={styles.text}>Latitud: </Text>{item.latidud}</Text>
            <Text><Text style={styles.text}>Longitud: </Text>{item.longitud}</Text>            
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
    }
})

export default Card;
