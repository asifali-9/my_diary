import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const WelcomeScreen = () => {
    const navigation = useNavigation()

  return (
    <View>
      <ImageBackground source={require('../../assets/background/bg3.jpg')} style={{height: '100%'}}/>
      <View className={'w-full absolute'}>
        <View className={'w-full items-center pt-16'}>
          <Image source={require('../../assets/icons/book3.png')} style={{height: 120, width: 120}}/>
        </View>

        <View className={'w-full pt-5 pb-10 px-3 flex-row items-center'}>
          <Text className={'text-white font-bold text-4xl'}>Introduce yourself, And write your thought</Text>
        </View>

        <TouchableOpacity onPress={()=> navigation.navigate('Login')} className={'w-[80%] p-1 items-center self-center rounded-full bg-sky-600'}>
          <Text className={'text-white font-bold text-2xl'}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('Signup')} className={'w-[80%] p-1 items-center mt-5 self-center rounded-full bg-gray-200'}>
          <Text className={'text-sky-600 font-bold text-2xl'}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})