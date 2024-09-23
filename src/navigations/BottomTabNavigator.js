import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Screens
import HomeScreen from "../screens/HomeScreen";
import CategoryScreen from "../screens/CategoryScreen";
import CreateScreen from "../screens/CreateScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/userProfile/WelcomeScreen";

const Tab = createBottomTabNavigator();



const BottomTabNavigator = ({navigation}) => {
const userProfile = useSelector((state)=> state.userProfileReducer.userProfile)

  // const getFirbaseData = ()=> {
  //   const db = getDatabase(app);
  //   const dbRef = ref(db, 'mydiary');
  //   console.log('Receiving Data');
  //   onValue(dbRef, (snapshot) => {
  //     let data = snapshot.val();
  //     console.log('Testing');
  //     console.log('0, Index data ==> : ', data);
  //   });
    
  // }

  // useEffect(() => {
  //   getFirbaseData()
  // }, [])
  

  
//  console.log(userProfile.isLogedIn);
  
  return (
    <>
     {
      userProfile.isLogedIn === true ? 
      <Tab.Navigator screenOptions={{headerShown: true, tabBarHideOnKeyboard: true, tabBarActiveTintColor: 'white', tabBarStyle: {backgroundColor: '#0f172a',}, }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: "My Diary",
          headerTitleStyle: {
              color: "white",
              fontWeight: "bold",
            },
          headerStyle: {
              backgroundColor: "#0f172a",
            },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),

          headerRight: () => (
             <View style={{flex: 1, paddingHorizontal: 15, justifyContent: "center", }}>
              <TouchableOpacity
                  onPress={() => navigation.navigate("UserProfile")}
                  className={
                    "h-9 w-9 bg-slate-800 rounded-full items-center justify-center"
                  }
                >
                  <FontAwesome name="user" size={24} color={"grey"} />
                </TouchableOpacity>
             </View>
            ),
        }}
      />
      {/* <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerShown: true,
          headerTitle: "My Diary",
          headerTitleStyle: {
              color: "white",
              fontWeight: "bold",
            },
          headerStyle: {
              backgroundColor: "#0f172a",
            },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
          headerRight: () => (
             <View style={{flex: 1, paddingHorizontal: 15, justifyContent: "center", }}>
              <TouchableOpacity
                  onPress={() => navigation.navigate("UserProfile")}
                  className={
                    "h-9 w-9 bg-slate-800 rounded-full items-center justify-center"
                  }
                >
                  <FontAwesome name="user" size={24} color={"grey"} />
                </TouchableOpacity>
             </View>
            ),
        }}
      /> */}
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          headerShown: true,
          headerTitle: "My Diary",
          headerTitleStyle: {
              color: "white",
              fontWeight: "bold",
            },
          headerStyle: {
              backgroundColor: "#0f172a",
            },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notebook-edit-outline" color={color} size={size} />
          ),
          headerRight: () => (
             <View style={{flex: 1, paddingHorizontal: 15, justifyContent: "center", }}>
              <TouchableOpacity
                  onPress={() => navigation.navigate("UserProfile")}
                  className={
                    "h-9 w-9 bg-slate-800 rounded-full items-center justify-center"
                  }
                >
                  <FontAwesome name="user" size={24} color={"grey"} />
                </TouchableOpacity>
             </View>
            ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          headerTitle: "My Diary",
          headerTitleStyle: {
              color: "white",
              fontWeight: "bold",
            },
          headerStyle: {
              backgroundColor: "#0f172a",
            },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
          headerRight: () => (
             <View style={{flex: 1, paddingHorizontal: 15, justifyContent: "center", }}>
              <TouchableOpacity
                  onPress={() => navigation.navigate("UserProfile")}
                  className={
                    "h-9 w-9 bg-slate-800 rounded-full items-center justify-center"
                  }
                >
                  <FontAwesome name="user" size={24} color={"grey"} />
                </TouchableOpacity>
             </View>
            ),
        }}
      />
    </Tab.Navigator>
      :
      <WelcomeScreen />
     }
    </>
  );
};

export default BottomTabNavigator;
