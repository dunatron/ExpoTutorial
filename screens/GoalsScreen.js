import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  Button
} from "react-native";

import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";

const GoalsScreen = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: goalTitle
      }
    ]);
    setIsAdding(false);
  };
  const cancelAddingGoalHandler = () => {
    setIsAdding(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={() => setIsAdding(!isAdding)} />
      <GoalInput
        open={isAdding}
        onAddGoal={addGoalHandler}
        onCancel={cancelAddingGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            text={itemData.item.value}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
};

GoalsScreen.navigationOptions = {
  title: "Goals",
  navigationOptions: {
    tabBarLabel: "Goals!"
  }
};

export default GoalsScreen;

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
