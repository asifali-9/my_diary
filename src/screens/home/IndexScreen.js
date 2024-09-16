import { View, Text, } from "react-native";
import React, { useState } from "react";
import Header from "../../components/home/Header";
import Content from "../../components/home/Content";

const IndexScreen = () => {
  
  return (
    <View className={"flex-1 bg-slate-900"}>
      <Header />
      <Content />
    </View>
  );
};

export default IndexScreen;
