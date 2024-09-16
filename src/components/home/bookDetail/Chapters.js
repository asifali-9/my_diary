import { View, Text } from 'react-native'
import React from 'react'

const Chapters = () => {
  return (
    <View className={'flex'}>
      <View className={'flex mx-2 px-2 my-2 py-2 border border-slate-700 rounded justify-center'}>
        <Text className={'text-slate-200 text-lg font-bold'}>Chapters</Text>
      </View>
    </View>
  )
}

export default Chapters