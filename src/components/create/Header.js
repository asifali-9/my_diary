import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSelector, useDispatch } from "react-redux";
import {addOption, updateOption} from '../../features/option/optionSlice';
import { useNavigation } from "@react-navigation/native";

const Header = ({updateItem, action,}) => {
  const navigation = useNavigation()
  
  

  const [isModalShow, setIsModalShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Note");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isTypeVisible, setIsTypeVisible] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [inputValue, setInputValue] = useState();
  const [optionsData, setOptionsData] = useState(options);

  const dispatch = useDispatch();
  const options = useSelector((state) => state.optionReducer.options);

  useEffect(() => {
    repeat();
    updateItem?.category ? setSelectedCategory(updateItem.category) 
    : null
  }, [])

  const repeat = ()=> {
    setInterval(() => {
      setDate(new Date().toLocaleDateString());
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
  }
  

  const handleSelectedCategory = (option) => {
    setSelectedCategory(option.category);
    setSelectedType(option.type);
    
    options.map((item, index)=> {
      if(item.id === option.id){
        dispatch(updateOption({id: item.id, category: item.category, type: item.type, selected: true}))
      }else{
        dispatch(updateOption({id: item.id, category: item.category, type: item.type, selected: false}))
      }
      // navigation.canGoBack(false)
    })
    // console.log(options);
    
    setIsModalShow(false);
  };

  const handleSelectedType = (item) => {
    setSelectedType(item);
    setIsTypeVisible(false);
  };

  const addCategory = () => {
    dispatch(addOption({
      id: Date.now(),
      category: inputValue,
      type: selectedType,
      selected: false,
    }))
    // console.log(inputValue);
    setInputValue("");
    setOptionsData(options);
  };

  return (
    <View
      className={
        "flex flex-row items-center justify-between pl-3 pr-3 pt-1 pb-1"
      }
    >
      <Text className={"text-base text-white"}>{date + "  " + time}</Text>

      <TouchableOpacity
        onPress={() => setIsModalShow(!isModalShow)}
        className={"flex flex-row gap-1 items-center justify-center"}
      >
        <Text className={"text-base text-white"}>{selectedCategory}</Text>
        <AntDesign name="caretdown" size={13} color="white" />
      </TouchableOpacity>

      {isModalShow ? (
        <View
          className={
            "absolute z-50 w-64 h-72 right-0 rounded-xl items-center justify-between top-8 py-1 px-1 bg-slate-800"
          }
        >
          <ScrollView className={"w-full"}>
            {options.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => handleSelectedCategory(item, index)}
                  key={index}
                  className={`h-10  flex-row items-center rounded px-2 justify-between my-1 ${
                    item.category === selectedCategory ? "bg-teal-700" : null
                  }`}
                >
                  <Text
                    className={"text-slate-200 flex-1"}
                  >{`${item.category} ( ${item.type} )`}</Text>

                  <View
                    className={"w-14 flex-row items-center justify-between"}
                  >
                    <TouchableOpacity
                      className={"h-8 w-8  items-center justify-center"}
                    >
                      <AntDesign name="edit" size={20} color="darkblue" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      className={"h-8 w-8  items-center justify-center"}
                    >
                      <AntDesign name="delete" size={20} color="red" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Add new category */}
          <View className={"w-full  my-2 px-2 bg-slate-800"}>
            <Text className={"text-slate-200 text-xs"}>Add new category</Text>

            <View className={"flex-row items-center justify-between"}>
              <View className={"flex-1 pr-2"}>
                <TextInput
                  onChangeText={(e) => setInputValue(e)}
                  className={"text-slate-500"}
                  placeholder="Enter name here"
                  value={inputValue}
                  placeholderTextColor={"#64748b"}
                />
              </View>

              <TouchableOpacity
                onPress={() => setIsTypeVisible(true)}
                className={"flex-row items-center justify-center"}
              >
                <Text className={"text-slate-200"}>
                  {selectedType ? selectedType : "Type"}
                </Text>
                <AntDesign name="down" size={12} color="#e2e8f0" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => addCategory()}
              activeOpacity={0.5}
              className={
                "mt-2 p-2 rounded items-center justify-center bg-sky-700"
              }
            >
              <Text className={"text-slate-200 font-bold text-sm"}>
                Add category
              </Text>
            </TouchableOpacity>

            {/* Type modal */}
            <View
              className={
                "justify-center rounded-sm absolute right-0 top-10 bg-slate-700"
              }
            >
              {isTypeVisible ? (
                <>
                  <TouchableOpacity
                    onPress={() => handleSelectedType("Single page")}
                    className={`p-1 m-1 rounded-sm ${
                      selectedType === "Single page" ? "bg-teal-700" : null
                    }`}
                  >
                    <Text className={"text-slate-200"}>Single page</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => handleSelectedType("Multi pages book")}
                    className={`p-1 m-1 rounded-sm ${
                      selectedType === "Multi pages book" ? "bg-teal-700" : null
                    }`}
                  >
                    <Text className={"text-slate-200"}>Multi pages book</Text>
                  </TouchableOpacity>
                </>
              ) : null}
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Header;
