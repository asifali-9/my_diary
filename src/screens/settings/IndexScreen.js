import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../features/data/userProfileSlice';


const IndexScreen = ({navigation}) => {
  // console.log(navigation);

  const dispatch = useDispatch()
  
  const handleLogout = ()=> {
    dispatch(userLogout())
  }
  
    const settingList = [
        { title: "Logout", icon: "security" },
      ];

  return (
    <View className={"flex-1 w-full bg-slate-900 "}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        className={"w-full"}
      > 
        {settingList.map((item, index) => {
          return (
            <TouchableOpacity onPress={()=> item.title === 'Logout' ? handleLogout() : null} key={index}
              className={
                "h-12 w-[95%] flex-row items-center bg-slate-800 rounded m-1 p-1"
              }
            >
              <SimpleLineIcons name="logout" size={24} color="white" />
              <Text className={"text-lg text-white ml-2"}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  )
}

export default IndexScreen