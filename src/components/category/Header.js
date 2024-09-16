import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = ({name}) => {
  return (
    <View className="flex items-center p-2 justify-between flex-row">
      <Text className={'text-slate-300'}>{name}</Text>
      {/* <View className={'flex-1 m-1 mr-2 bg-slate-500 h-[1px]'}></View> */}
      <TouchableOpacity>
        <AntDesign name="right" size={20} color="#64748b" />
      </TouchableOpacity>
    </View>
  )
}

export default Header