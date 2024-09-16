import { View, Text, ImageBackground, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { addSignupDetails } from '../../features/data/userProfileSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({navigation}) => {

  const [fullName, setFullName] = useState('')
  const [age, setAge] = useState()
  const [userName, setUserName] = useState('')
  const [mobileNumber, setMobileNumber] = useState()
  const [gender, setGender] = useState('Male')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [isGenderModalShow, setIsGenderModalShow] = useState(false)

  const dispatch = useDispatch()

  const signupData = {
    fullName,
    age,
    userName,
    mobileNumber,
    gender,
    password,
    confirmPassword,
    isLogedIn: false,
  }


  const handleSignupButton = async()=> {
    try {
      const jsonValue = JSON.stringify(signupData);
      await AsyncStorage.setItem('signup-data-key', jsonValue);
      
    } catch (e) {
      // saving error
    }
    dispatch(addSignupDetails(signupData))
    
    navigation.navigate('Login')
    
    
  }

  const handleGender = (gender)=> {
    setIsGenderModalShow(!isGenderModalShow)
    setGender(gender)
  }

  return (
    <View>
      <ImageBackground source={require('../../assets/background/bg3.jpg')} style={{height: '100%',}}/>
      <View className={'h-full w-full absolute'}>
        <View className={'w-full pt-5 pb-2 px-3 items-center'}>
          <Text className={'text-white font-bold text-5xl'}>Signup</Text>
        </View>

        <ScrollView className={'w-full h-full pt-4 rounded-tl-[50px] bg-white'}>
          <Text className={'text-3xl text-center text-teal-700 font-bold'}>Welcome</Text>
          <Text className={'text-sm text-center text-slate-700'}>Create a new account</Text>

          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setFullName(e)} value={fullName} placeholder='full name'/>
          </View>
          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setAge(e)} value={age} keyboardType='number-pad' placeholder='Age'/>
          </View>
          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setUserName(e)} value={userName} placeholder='Username'/>
          </View>
          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setMobileNumber(e)} value={mobileNumber} keyboardType='number-pad' placeholder='Mobile number'/>
          </View>

          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setPassword(e)} value={password} placeholder='Password'/>
          </View>
          <View className={'h-10 mt-4 self-center rounded-full justify-center px-2 w-[80%] bg-slate-300'}> 
            <TextInput onChangeText={(e)=> setConfirmPassword(e)} value={confirmPassword} placeholder='Confirm password'/>
          </View>

          <View className={'w-[80%] self-center'}>

            <View className={'h-10 mt-5  mb-5 self-center flex-row items-center rounded-full justify-between px-2 w-[100%] bg-slate-300'}> 
              <Text className={'text-slate-500'}>{gender}</Text>
              <TouchableOpacity onPress={()=> setIsGenderModalShow(true)} className={'p-1'}>
                <AntDesign name="caretdown" size={14} color="black" />
              </TouchableOpacity>
            </View>

            {
              isGenderModalShow ?
              <View className={'w-20 right-1 top-1 absolute rounded bg-slate-700'}>
                <TouchableOpacity onPress={()=> handleGender("Male")}>
                  <Text className={`text-slate-200 text-sm font-bold ${gender === 'Male' ? 'bg-sky-500' :'bg-slate-600'} rounded p-1`}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> handleGender("Female")}>
                  <Text className={`text-slate-200 mt-1 text-sm font-bold ${gender === 'Female' ? 'bg-sky-500' :'bg-slate-600'} rounded p-1`}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> handleGender("Other")}>
                  <Text className={`text-slate-200 mt-1 text-sm font-bold ${gender === 'Other' ? 'bg-sky-500' :'bg-slate-600'} rounded p-1`}>Other</Text>
                </TouchableOpacity>    
              </View>
            :
            null
            }
          </View>
          

          <TouchableOpacity onPress={()=> handleSignupButton()} className={'h-10 w-[80%] my-6 rounded-full items-center justify-center self-center bg-teal-700'}>
            <Text className={'text-white text-2xl font-bold'}>Signup</Text>
          </TouchableOpacity>

        </ScrollView>
       
      </View>
    </View>
  )
}

export default SignupScreen