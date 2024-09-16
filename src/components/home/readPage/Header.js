import { View, Text } from 'react-native'
import React from 'react'

const Header = ({route}) => {

    const data = route.params
    // console.log(data);
    
    
  return (
    <View className={'flex'}>
      <View className={'flex-row justify-between px-2'}>
        <Text className={'text-slate-200'}>{data.creationDate}</Text>
        <Text className={'text-slate-200'}>{data.creationTime}</Text>
        <Text className={'text-slate-200'}>{data.category}</Text>
        <Text className={'text-slate-200'}>{data.type}</Text>
      </View>
    </View>
  )
}

export default Header