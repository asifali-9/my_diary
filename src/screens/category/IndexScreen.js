import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/category/Header'
import NotesWithCategory from '../../components/category/NotesWithCategory'

let arr = [5,6,7,3,9,2]
const IndexScreen = () => {
  return (
    <ScrollView className={'flex-1 bg-slate-900'}>
      {
        arr.map((item, index)=> {
          return(
            <NotesWithCategory key={index} headerName={'Notes'}/>
          )
        })
      }
    </ScrollView>
  )
}

export default IndexScreen

const styles = StyleSheet.create({})