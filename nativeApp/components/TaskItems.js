import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const TaskItems = ({ text, index, id, onDeleteItem }) => {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "green" }}
        onPress={onDeleteItem.bind(this, id)}
        style={({ pressed }) => pressed && StyleSheet.pressedTask}
      >
        <Text style={styles.itemText}>
          Task number {index + 1}: {text}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 7,
    borderRadius: 5,
    backgroundColor: "lightgrey",
    color: "red",
  },
  pressedTask: {
    opacity: 0.5,
    backgroundColor: "purple",
  },
  itemText: {
    color: "red",
    padding: 7,
  },
});

export default TaskItems;
