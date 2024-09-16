import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/home/createChapter/Header'
import InputChapter from '../../components/home/createChapter/InputChapter'

const CreateChapterScreen = () => {
  return (
    <View className={'flex-1 bg-slate-900'}>
      <Header />
      <InputChapter />
    </View>
  )
}

export default CreateChapterScreen