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

const DetailsScreen = props => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>
        itemId: {JSON.stringify(navigation.getParam("itemId", "NO-ID"))}
      </Text>
      <Text>
        otherParam:
        {JSON.stringify(navigation.getParam("otherParam", "default value"))}
      </Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100)
          })
        }
      />
    </View>
  );
};

DetailsScreen.navigationOptions = screenProps => ({
  title: `item ${screenProps.navigation.getParam(
    "itemId",
    "A Nested Details Screen"
  )} details`,
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
});

export default DetailsScreen;
