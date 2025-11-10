import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home  from "../screens/Home";
import  Result from "../screens/Result";
import { PropsStackRoutes } from "./interfaces";

const Stack = createNativeStackNavigator<PropsStackRoutes>();

export default function StackNavigationApp(){
    return(
        <Stack.Navigator id={undefined} initialRouteName="Home" screenOptions={{headerShown: false}}> 
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Result" component={Result}/>
        </Stack.Navigator>
    )
}