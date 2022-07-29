import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LogInScreen from '../screens/LogInScreen';
const stack = createStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name='LogIn' component={LogInScreen} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Navigation;
