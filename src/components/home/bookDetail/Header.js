import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
  
  return (
    <View className={'flex'}>

      <View className={'flex mx-2 flex-row justify-between'}>
        <Text className={'text-slate-200 px-2 py-1 font-bold text-sm'}>Story Title</Text>
        <Text className={'text-slate-200 px-2 py-1 font-bold text-sm'}>Category Name</Text>
        <Text className={'text-slate-200 px-2 py-1 font-bold text-sm'}>Category Type</Text>
      </View>

      <View className={'flex mx-2 my-2 px-2 py-5 items-center border rounded-3xl border-slate-700'}>
        <Image source={require('../../../assets/icons/book3.png')} style={{height: 200, width: 200}}/>
      </View>

      <View className={'flex mx-2 px-2 border rounded border-slate-700 py-2 flex-row justify-between'}>
        <TouchableOpacity activeOpacity={1} className={'items-center justify-center'}>
          <Text className={'text-slate-200 text-lg font-bold'}>85 Chapters</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('CreateChapter')} className={'items-center flex-row justify-center'}>
          <Text className={'text-lg text-sky-400 pr-2 font-bold'}>Add Chapter</Text>
          <AntDesign name="pluscircle" size={32} color="#38bdf8" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header