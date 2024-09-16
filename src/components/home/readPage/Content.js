import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Content = ({route}) => {
    const data = route.params
    const textStyle = useSelector((state)=> state.textStyleReducer.textStyle)

    // console.log(textStyle);
    
  return (
    <View className={'flex-1 mt-2 px-2'}>
      <View className={'h-8 w-full rounded px-1 flex-row items-center bg-slate-500'}>
        <Text className={'text-slate-900 text-base font-bold'}>Title :</Text>
        <Text className={'text-sky-400 pl-3 text-base font-bold'}>{data.title}</Text>
      </View>
        <ScrollView className={'flex rounded px-1 mt-2 bg-slate-800'}>
          <Text style={{color: textStyle.defaultColor, fontSize: textStyle.sliderValue}}>{data.description}</Text>
        </ScrollView>
    </View>
  )
}

export default Content