import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LogInScreen from '../screens/LogInScreen';
import Home from '../screens/Home';
import Finca from '../screens/Finca';
import Lotes from '../screens/Lotes';
import SingUpScreen from '../screens/SingUpScreen';

const stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='LogIn' component={LogInScreen} />
                <stack.Screen name='SingUp' component={SingUpScreen} />
                <stack.Screen name='Home' component={Home} />
                <stack.Screen name='Finca' component={Finca} />
                <stack.Screen name='Lotes' component={Lotes} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
