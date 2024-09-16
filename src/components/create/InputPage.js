import { View, Text , TextInput, TouchableOpacity} from 'react-native'
import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addData, updateData } from '../../features/data/dataSlice';
import { useNavigation } from '@react-navigation/native';

const InputPage = ({updateItem, action, setIsUpdateActive}) => {
    const navigation = useNavigation()
    // console.log(updateItem, action);
    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('')
    const [type, setType] = useState('')

    const dispatch = useDispatch()
    const options = useSelector((state)=> state.optionReducer.options)

    useEffect(() => {
      if(action === 'update'){
        setTitle(updateItem.title)
        setDescription(updateItem.description)
      }
    }, [])
    
    
    const handleAddData = ()=> {
      let c;
      let t
      options.map((item, index)=> {
        if(item.selected === true){
          c = item.category
          t = item.type 
        }
      })

      if(action === 'update'){
        const new_Obj = { ...updateItem, title: title, description: description,  category: c, type: t}
        dispatch(updateData(new_Obj))
        setTitle('');
        setDescription('');
        setIsUpdateActive(false);
        // console.log('update called');

        

      }else{
        options.map((item, index)=> {
            if(item.selected === true){
                setCategory(item.category);
                setType(item.type);
                // console.log(item.category, item.type);
                
                creationDate = new Date().toLocaleDateString();
                creationTime = new Date().toLocaleTimeString();

                dispatch(addData({id: Date.now(), title: title, description: description, category: item.category, type: item.type, creationDate: creationDate, creationTime: creationTime}))
                setTitle('');
                setDescription('');
            }
        })
        // console.log(category,type);
        navigation.navigate('Home')
      }
    }

  return (
    <View className={'flex my-2'}>

    {/* Title input */}
      <View className={'flex w-full justify-center'}>
        <View className={'flex w-[90%] self-center justify-center px-1 rounded-tl rounded-tr bg-slate-800'}>
          <Text className={'text-slate-400'}>Title</Text>
        </View>
        <View className={'flex w-[90%] self-center justify-center px-1 bg-slate-800'}>
          <TextInput onChangeText={(e)=> setTitle(e)} className={'text-slate-200 text-xl font-bold'} value={title} placeholder='Enter title here' placeholderTextColor={'#475569'}/>
        </View>
      </View>

    {/* Description input */}
      <View className={'max-h-52 w-full'}>
        <View className={'flex w-[90%] self-center justify-center px-1 pt-5 bg-slate-800'}>
          <Text className={'text-slate-400'}>Description</Text>
        </View>
        <View className={'flex w-[90%] self-center justify-center px-1 rounded-bl rounded-br bg-slate-800'}>
          <TextInput multiline={true} onChangeText={(e)=> setDescription(e)} className={'text-slate-200 text-lg'} value={description} placeholder='Enter description here' placeholderTextColor={'#475569'}/>
        </View>
      </View>

    {/* Save data button */}
      <View className={'flex w-full items-center mt-12 justify-center'}>
        <TouchableOpacity onPress={()=> handleAddData()} activeOpacity={0.5} className={'h-10 bg-sky-600 rounded items-center justify-center px-5'}>
          <Text className={'text-slate-200 font-bold'}>Save Data</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default InputPage