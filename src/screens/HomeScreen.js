import { View, Text } from 'react-native'
import React from 'react'
import {
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from './home/IndexScreen';
import BookDetailScreen from './home/BookDetailScreen';
import ReadPageScreen from './home/ReadPageScreen';
import CreateChapterScreen from './home/CreateChapterScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {

  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator>
        <Stack.Screen name='Index' component={IndexScreen} options={{headerShown: false}}/>
        <Stack.Screen name='BookDetail' component={BookDetailScreen} options={{headerShown: false}}/>
        <Stack.Screen name='ReadPage' component={ReadPageScreen} options={{headerShown: false}}/>
        <Stack.Screen name='CreateChapter' component={CreateChapterScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen