import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCategory } from '../../features/option/optionSlice'

const Header = () => {
    // const category = ['All', 'Note', 'Story']
    // const [activeCategory, setActiveCategory] = useState('All')

    // console.log(options);
    // const options = useSelector((state)=> state.optionReducer.options)

    // console.log(options.category);
    
    // dispatch = useDispatch();   

  return (
    <View className={'flex flex-row items-center justify-between pl-3 pr-3 pt-1 pb-1'}>
        <TouchableOpacity className={'flex flex-row ml-3 mr-3  bg-blue-500 rounded-full p-1 pl-5 pr-5 items-center justify-center'}>
          <Text className={'text-base text-white'}>All Books & Pages</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Header