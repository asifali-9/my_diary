import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from '../components/create/Header';
import InputPage from '../components/create/InputPage';


const Stack = createNativeStackNavigator();

const CreateScreen = ({updateItem, action, setIsUpdateActive}) => (
  <View className={'flex-1 bg-slate-900'}>
    <Header updateItem={updateItem} action={action} />
    <InputPage updateItem={updateItem} action={action} setIsUpdateActive={setIsUpdateActive}/>
  </View>
)


export default CreateScreen

const styles = StyleSheet.create({})