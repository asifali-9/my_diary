import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { deleteData } from "../../features/data/dataSlice";
import { useNavigation } from "@react-navigation/native";
import InputPage from "../create/InputPage";
import CreateScreen from "../../screens/CreateScreen";

let updateItem;

const Content = () => {
 
  const navigation = useNavigation();
  const [isUpdateActive, setIsUpdateActive] = useState(false)
  const data = useSelector((state) => state.dataReducer.data);
  const options = useSelector((state) => state.optionReducer.options);
  const dispatch = useDispatch();


  const handleDeleteData = (item)=> {
    dispatch(deleteData(item.id))
  }

  const handleUpdateData = (item)=> {
    updateItem = item
    // console.log(updateItem);
    setIsUpdateActive(!isUpdateActive)
    
  }

  const handleReadData = (item)=> {
    // console.log(item.type);
    
    if(item.type === 'Single page'){
      navigation.navigate('ReadPage', item)
    }else{
      navigation.navigate('BookDetail', item)
    }
  }

  return (
    <View className={"flex-1"}>
      <FlatList
        className={"w-full"}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View className={"flex"}>
              <TouchableOpacity onPress={()=> handleReadData(item)} className={"flex ml-2 mr-2 mb-1 flex-row"}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  className={
                    "h-16 w-16 bg-slate-800 items-center justify-center p-1 rounded mt-1 mb-1"
                  }
                >
                {
                  item.type === 'Single page' ?
                 <Image source={require('../../assets/icons/content.png')} style={{height: '100%', width: '100%'}}/> 
                 :
                 <Image source={require('../../assets/icons/book2.png')} style={{height: '100%', width: '100%'}}/> 

                }
                </TouchableOpacity>

                <View className={"flex-1 justify-between pl-1 rounded mb-1"}>
                  <View className={"flex-row justify-between rounded "}>
                    <View className={"flex-1"}>
                      <Text className={"text-slate-300 text-base"}>
                        {item.title}
                      </Text>
                    </View>
                    <View
                      className={"items-center justify-center flex-row px-1"}
                    >
                      <TouchableOpacity onPress={()=> handleUpdateData(item)} className={'px-2 py-2 rounded bg-slate-900'}>
                        <MaterialCommunityIcons name="note-edit" size={22} color="#049efe" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> handleDeleteData(item)} className={'px-2 py-2 rounded bg-slate-900'}>
                        <MaterialCommunityIcons name="delete" size={22} color="#d7131c" />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className={"flex-row justify-between"}>
                    <Text className={"text-slate-500 pt-1 text-xs"}>
                      {item.creationDate}
                    </Text>
                    <Text className={"text-slate-500 pt-1 text-xs"}>
                      {item.creationTime}
                    </Text>
                    <Text className={"text-slate-500 pt-1 text-xs"}>
                      {item.category}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      {
        isUpdateActive ?
       <View className={'absolute w-full h-[80%] bottom-0 bg-gray-300'}>
          <CreateScreen updateItem={updateItem} action={'update'} setIsUpdateActive={setIsUpdateActive}/>
       </View>
       :
       null
      }
    </View>
  );
};

export default Content;
