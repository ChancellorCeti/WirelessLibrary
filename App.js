import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import searchScreen from "./screens/searchScreen.js";
import transactionScreen from "./screens/transactionScreen.js";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
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
});
const TabNavigator=createBottomTabNavigator(
  {
    Transaction:{screen:transactionScreen},
    Search:{screen:searchScreen}
  }
);
const AppContainer=createAppContainer(TabNavigator);