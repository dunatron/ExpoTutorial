import "react-native-gesture-handler";
import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button
} from "react-native";
// Screens
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import GoalsScreen from "./screens/GoalsScreen";
import ChatsScreen from "./screens/ChatsScreen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: DetailsScreen,
    GoalsScreen: GoalsScreen,
    ChatsScreen: ChatsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    navigationOptions: {
      tabBarLabel: "Home!"
    }
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  listContainer: {},
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    color: "#fff",
    borderWidth: 1,
    marginTop: 10
  }
});
