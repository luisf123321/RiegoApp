import React,{useEffect,useState} from 'react';
import {View, Text,FlatList,StyleSheet} from 'react-native';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import Http from '../../libs/Http';
import AsyncStorage from '@react-native-async-storage/async-storage'
const LotesScreen = (props) => {
    const [token, setToken] = useState('');
    const [data, setData] = useState(null);
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
            console.log("********************************* lotes ");            
            console.log(props.route.params);
            let value = await getUserToken();
            console.log(value)
            let json = await Http.instance.get("https://riegoback.herokuapp.com/lote/finca/"+props.route.params.id, value);
            console.log(json)
            if (json !== null) {
                setData(json);
            }
        }
        getFincasById().catch(console.error)
    }, []);

   

    return (
        <View style={styles.root}>           
            <FlatList 
                data={data}
                renderItem={({ item }) =>
                    <Card
                    item={item} 
                    ruta={"DetalleFinca"} 
                    text={"Ver Datelle"}
                    ruta2={"Lotes"} 
                    text2={"Ver Sectores"}
                    />
                }
             />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
})

export default LotesScreen;
