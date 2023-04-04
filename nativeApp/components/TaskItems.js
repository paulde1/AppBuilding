import React from "react";
import { StyleSheet } from "react-native";
import { Motion } from "@legendapp/motion";

const { Text, View, Pressable, FlatList, Image, ScrollView, SectionList } =
  Motion;

const TaskItems = ({ text, index, id, onDeleteItem }) => {
  return (
    <View transition={{ ease: "easeOut", duration: 2 }} style={styles.item}>
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
    padding: 7,
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
