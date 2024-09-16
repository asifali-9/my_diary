import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../components/home/bookDetail/Header'
import Chapters from '../../components/home/bookDetail/Chapters'
import { useNavigation } from '@react-navigation/native'

const BookDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View className={'flex-1 bg-slate-900'}>
      <Header />
      <Chapters />
      <Text className={'text-white text-2xl text-center py-1 font-bold'}>Work on this feature later</Text>
      <TouchableOpacity onPress={()=> navigation.goBack()} className={'items-center justify-center rounded px-1 h-16 w-40 self-center border border-slate-600'}>
        <Text className={'text-sky-600 text-2xl text-center py-1 font-bold'}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BookDetailScreen