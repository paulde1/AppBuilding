import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TaskItems = ({ item, index }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        Task number {index + 1}: {item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flex: 5,
  },
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
