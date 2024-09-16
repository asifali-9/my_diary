import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "./settings/IndexScreen";
import SecurityScreen from "./settings/SecurityScreen";

const Stack = createNativeStackNavigator();

const SettingsScreen = () => {
  
  
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Security" component={SecurityScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SettingsScreen;
