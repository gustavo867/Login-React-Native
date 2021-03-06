import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import Login from './pages/Login';
import Transactions from './pages/Transactions';
import Register from './pages/Register';
import Home from './pages/Home'

const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: "#f0f0f5"
                }
            }}
            >
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Transactions' component={Transactions}/>
                <AppStack.Screen name='Register' component={Register}/>
                <AppStack.Screen name='Home' component={Home}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes