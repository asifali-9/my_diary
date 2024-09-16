import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { useDispatch, useSelector } from "react-redux";
import { updateTextStyle } from "../../../features/style/textStyleSlice";


const TextStyle = () => {
  // const [sliderValue, setSliderValue] = useState(18);
  const textStyle = useSelector((state)=> state.textStyleReducer.textStyle)
  const dispatch = useDispatch()

  // console.log(textStyle);
  const handleTextStyle = (value, action)=> {
    if(action === 'updateDefaultColor'){
      dispatch(updateTextStyle({from: 'color', action: 'updateDefaultColor', value: value}))
    }else{
      dispatch(updateTextStyle({from: 'slider', action: 'updateSliderValue', value: value}))
    }
  }
  
  return (
    <View className={"h-10 w-full px-3 py-1"}>
      <View className={"flex-1 bg-slate-500 flex-row rounded"}>
        <View className={"flex-1 flex-row items-center"}>
          <Slider
            style={{ width: 150, height: 40 }}
            minimumValue={textStyle.minSliderValue}
            maximumValue={textStyle.maxSliderValue}
            value={textStyle.sliderValue}
            onValueChange={(value)=> handleTextStyle(value, 'updateSliderValue')}
            step={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
          <Text className={'text-slate-200'}>{textStyle.sliderValue}</Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={{alignItems: "center"}} className={'flex-1 flex-row mr-1'}>
            {
              textStyle.textColors.map((item , index)=> {
                return(
                  <TouchableOpacity onPress={()=> handleTextStyle(item, 'updateDefaultColor')} key={index} style={{backgroundColor: item}} className={'h-6 w-6 ml-1 rounded'}></TouchableOpacity>
                )
              })
            }
        </ScrollView>
      </View>
    </View>
  );
};

export default TextStyle;
