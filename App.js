import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vector-icons"
import colors from './Colors'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
     <View style={{flexDirection: "row"}}>

      <View style ={styles.divider}/>
      <Text style ={styles.title}>
        ToDo <Text style= {{fontWeight :"300", color:colors.purple}}>List</Text>
      </Text>
      <View style ={styles.divider}/>
     </View>
     <View style ={{marginVertical :48}}>
      <TouchableOpacity>
        <AntDesign name='plus' size={16} color={colors.purple}/>
      </TouchableOpacity>
     </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider : {
    backgroundColor : colors.purple,
    
    height : 1,
    flex : 1,
    alignSelf : "center",
  },
title :{
  fontSize :38,
  fontWeight :"800",
  color :colors.black,
paddingHorizontal :64,
}

});
