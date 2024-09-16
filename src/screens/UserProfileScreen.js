import { View, Text } from 'react-native'
import React from 'react'
import Profile from '../components/userProfile/Profile'


const UserProfileScreen = () => {
  return (
    <View className={'flex-1 bg-slate-900'}>
      <Profile />
    </View>
  )
}

export default UserProfileScreen