import { View, Text } from 'react-native'
import React from 'react'
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from './category/IndexScreen';

const Stack = createNativeStackNavigator();

const CategoryScreen = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen name='Index' component={IndexScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CategoryScreen