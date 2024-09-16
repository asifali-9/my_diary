import { View, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isLogedIn } from '../../features/data/userProfileSlice'

const LoginScreen = ({navigation}) => {

  const profile = useSelector((state)=> state.userProfileReducer.userProfile)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginData = {userName, password}

  const handleLogin = ()=> {
    dispatch(isLogedIn(loginData))
    navigation.navigate('Navigator')
    
  }

  return (
    <View>
      <ImageBackground source={require('../../assets/background/bg3.jpg')} style={{height: '100%'}}/>
      <View className={'h-full w-full absolute'}>
        <View className={'w-full pt-5 pb-2 px-3 items-center'}>
          <Text className={'text-white font-bold text-5xl'}>Login</Text>
        </View>
        <View className={'w-full h-full pt-10 rounded-tl-[100px] bg-white'}>
          <Text className={'text-3xl text-center text-teal-700 font-bold'}>Welcome Back</Text>
          <Text className={'text-sm text-center text-slate-700'}>Login to your account</Text>

          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setUserName(e)} value={userName} placeholder='username'/>
          </View>

          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setPassword(e)} value={password} secureTextEntry={true} placeholder='password'/>
          </View>
          <TouchableOpacity className={'w-[80%] self-center p-1 items-end'}>
            <Text className={'text-emerald-700 font-bold'}>Forgot Password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> handleLogin()} className={'h-10 w-[80%] my-28 rounded-full items-center justify-center self-center bg-teal-700'}>
            <Text className={'text-white text-2xl font-bold'}>Login</Text>
          </TouchableOpacity>

        </View>
       
      </View>
    </View>
  )
}

export default LoginScreen