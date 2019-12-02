import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button
} from "react-native";

const HomeScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here"
          });
        }}
      />
      <Button
        title="Go to Goals"
        onPress={() => props.navigation.navigate("GoalsScreen")}
      />
      <Button
        title="Go to Chat"
        onPress={() => props.navigation.navigate("ChatsScreen")}
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: "Home",
  navigationOptions: {
    tabBarLabel: "Home!"
  }
};

export default HomeScreen;
