import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
const Mapa = (props) => {
    const tokyoRegion = {
        latitude: props.lat,
        longitude: props.long,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={tokyoRegion}
            >
                <Marker coordinate={tokyoRegion} />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1, //the container will fill the whole screen.
        justifyContent: "flex-start",
        alignItems: "center",
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default Mapa;
