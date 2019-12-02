import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Touchable,
  TouchableOpacity
} from "react-native";

const GoalItem = props => (
  <TouchableOpacity
    onPress={() => props.onDelete(props.id)}
    activeOpacity={0.8}
  >
    <View style={styles.root}>
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    color: "#fff",
    borderWidth: 1,
    marginTop: 10
  }
});

export default GoalItem;
