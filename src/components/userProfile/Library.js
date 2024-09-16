import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

let content = [
    {title: 'Someting', description: 'This is the description', category: 'Notes'},
    {title: 'Anything', description: 'This is the description', category: 'Notes'},
    {title: 'Someting', description: 'This is the description', category: 'Notes'},
    {title: 'Someting', description: 'This is the description', category: 'Notes'},
    {title: 'No Idea', description: 'This is the description', category: 'Stories'},
    {title: 'Someting', description: 'This is the description', category: 'Stories'},
    {title: 'Someting', description: 'This is the description', category: 'Stories'},
    {title: 'Clear', description: 'This is the description', category: 'Stories'},
    {title: 'Someting', description: 'This is the description', category: 'Personal'},
    {title: 'Someting', description: 'This is the description', category: 'Personal'},
    {title: 'Picture', description: 'This is the description', category: 'Personal'},
    {title: 'Someting', description: 'This is the description', category: 'TodoList'},
    {title: 'Reduce', description: 'This is the description', category: 'TodoList'},
    {title: 'Someting', description: 'This is the description', category: 'TodoList'},
    
]


const Library = () => {
  return (
    <View className={'w-full items-center px-2 py-2'}>

      <View className={'w-28 items-center justify-evenly my-2 flex-row rounded-full h-8 bg-slate-800'}>
        <Text className={'text-slate-200 text-base'}>Library</Text>
        <AntDesign name="arrowdown" size={14} color="#e2e8f0" />
      </View>
      
      {
        content.map((item, index)=>{
            return(
            <View key={index} className={'flex ml-2 mr-2 mb-1 flex-row'}>
                  <TouchableOpacity activeOpacity={0.9} className={'h-16 w-16 bg-slate-800 items-center justify-center rounded p-1 mt-1 mb-1'}>
                    <Text className={'text-slate-400 text-4xl'}>{item.title.substring(0,1)}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity activeOpacity={0.9} className={'flex-1 justify-between pl-1 rounded mb-1'}>
                    <View className={'pr-1 flex-row justify-between rounded'}>
                      <Text className={'text-slate-300 text-base'}>{item.title}</Text>
                      <TouchableOpacity className={'flex-row items-center justify-center'}>
                        <Text className={'text-teal-400 text-xs'}>{item.category}</Text>
                        <AntDesign name="down" size={10} color="#2dd4bf" />
                      </TouchableOpacity>
                    </View>
                    <Text className={'text-slate-500 pt-1 text-xs'}>{item.description}</Text>
                    <View className={'flex-row justify-between'}>
                      <Text className={'text-slate-500 pt-1 text-xs'}>{'9/9/2024'}</Text>
                      <Text className={'text-slate-500 pt-1 text-xs'}>{'1:53'}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
        )
        })
      }

      
    </View>
  )
}

export default Library