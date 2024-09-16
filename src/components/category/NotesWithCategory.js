import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Header from './Header';

let content = [
  {
    title: "Someting",
    description: "This is the description",
    category: "Notes",
  },
  {
    title: "Anything",
    description: "This is the description",
    category: "Notes",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "Notes",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "Notes",
  },
  {
    title: "No Idea",
    description: "This is the description",
    category: "Stories",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "Stories",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "Stories",
  },
  {
    title: "Clear",
    description: "This is the description",
    category: "Stories",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "Personal",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "Personal",
  },
  {
    title: "Picture",
    description: "This is the description",
    category: "Personal",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "TodoList",
  },
  {
    title: "Reduce",
    description: "This is the description",
    category: "TodoList",
  },
  {
    title: "Someting",
    description: "This is the description",
    category: "TodoList",
  },
];

const NotesWithCategory = ({headerName}) => {
  return (
    <>
    <Header name={headerName}/>
    <View className={"flex-1"}>
      <FlatList
        className={"w-full"}
        data={content}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <>
              {item.category === "Notes" ? (
                <TouchableOpacity
                  activeOpacity={0.9}
                  className={
                    "h-52 w-36 bg-slate-800 items-center justify-between p-1 rounded m-2"
                  }
                >
                  <View className={'px-1 py-1 bg-slate-900 rounded'}>
                    <Text className={'text-slate-200'}>9/10/2024  10:58</Text>
                  </View>

                  <View className={'flex-1 w-full items-center justify-center'}>
                    <Text className={'text-slate-500 text-7xl'}>{item.title.substring(0,1)}</Text>
                  </View>
                  <View
                    className={
                      "w-full h-7 px-1 items-center justify-center rounded bg-slate-900"
                    }
                  >
                    <Text className={"text-white text-xs"}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              ) 
                : 
                null
              }
            </>
          );
        }}
      />
    </View>
    </>
  );
};

export default NotesWithCategory;
