import React from 'react'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import Estudo from './src/pages/Estudo'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Routes = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="Login" 
                    component={Login} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="Home" 
                    component={Home} 
                />
                <Stack.Screen 
                    options={{headerShown: false}} 
                    name="Estudo" 
                    component={Estudo} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes