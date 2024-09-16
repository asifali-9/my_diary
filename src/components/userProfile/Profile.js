import { View, Text, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native'
import React from 'react'
import Library from './Library'
import { useSelector } from 'react-redux'


const Profile = () => {
  const userProfile = useSelector((state)=> state.userProfileReducer.userProfile)

  // console.log(userProfile);
  
  return (
    <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', marginVertical: 5}}>

      {/* Profile logo */}
      <View className={'h-28 w-28 mt-2 items-center justify-center rounded-full bg-slate-300'}>
        <Text className={'text-6xl text-slate-600 font-bold'}>{userProfile.fullName.substring(0,1)}</Text>
      </View>

      {/* Profile name */}
      <Text className={'p-1 text-center text-lg text-white font-bold'}>{userProfile.fullName}</Text>

      {/* Edit profile button */}
      <TouchableHighlight onPress={()=> null} underlayColor='#1e293b' className={'items-center justify-center p-2 pl-4 pr-4 m-1 rounded-[100px] border border-red-700'}>
        <Text className={'text-red-700'}>Edit Profile</Text>
      </TouchableHighlight>

      {/* AdOns */}
      <View className={'p-2 my-2 flex-row items-center justify-between border w-full'}>
        <TouchableOpacity activeOpacity={1} className={'p-2 items-center justify-center'}>
          <Text className={'text-slate-200 font-bold'}>{'11'}</Text>
          <Text className={'text-slate-200 font-bold'}>{'Books & Pages'}</Text>
        </TouchableOpacity>
        <TouchableOpacity className={'p-2 items-center justify-center'}>
          <Text className={'text-sky-400 font-bold'}>{'85'}</Text>
          <Text className={'text-sky-400 font-bold'}>{'Followers'}</Text>
        </TouchableOpacity>
        <TouchableOpacity className={'p-2 items-center justify-center'}>
          <Text className={'text-sky-400 font-bold'}>{'50'}</Text>
          <Text className={'text-sky-400 font-bold'}>{'Following'}</Text>
        </TouchableOpacity> 
      </View>

      {/* About */}
      <View className={'w-full px-2'}>
        <Text className={'text-slate-200 text-base'}>Welcome to my Diary Account. Please follow my account to get new updates.</Text>
      </View>

      <Library />

    </ScrollView>
  )
}

export default Profile