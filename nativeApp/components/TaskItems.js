import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const TaskItems = ({ text, index, id, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>
          Task number {index + 1}: {text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 7,
    padding: 7,
    borderRadius: 5,
    backgroundColor: "lightgrey",
    color: "red",
  },
  itemText: {
    color: "red",
  },
});

export default TaskItems;
