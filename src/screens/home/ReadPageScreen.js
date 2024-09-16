import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/home/readPage/Header'
import Content from '../../components/home/readPage/Content'
import TextStyle from '../../components/home/readPage/TextStyle'

const ReadPageScreen = ({route, navigation}) => {
  return (
    <View className={'flex-1 bg-slate-900'}>
      <Header route={route}/>
      <Content route={route}/>
      <TextStyle />
    </View>
  )
}

export default ReadPageScreen