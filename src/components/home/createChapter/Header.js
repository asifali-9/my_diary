import {
    View,
    Text,
  } from "react-native";
  import React, { useState, useEffect } from "react";

  const Header = () => {
    
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [time, setTime] = useState(new Date().toLocaleTimeString());
  
    useEffect(() => {
      repeat();
    }, [])
  
    const repeat = ()=> {
      setInterval(() => {
        setDate(new Date().toLocaleDateString());
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      
    }
    
    return (
      <View
        className={
          "flex flex-row items-center justify-between pl-3 pr-3 pt-1 pb-1"
        }
      >
        <Text className={"text-base text-white"}>{date + "  " + time}</Text>
      </View>
    );
  };
  
  export default Header;
  