import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const TaskInput = ({ addHandler, visible, cancelGoalHandler }) => {
  const [text, setText] = useState("");

  const inputHandler = (enteredText) => {
    setText(enteredText);
  };

  const addGoalHandler = () => {
    addHandler(text);
    setText("");
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.addItem}>
        <TextInput
          style={styles.inputText}
          placeholder='I have to...'
          onChangeText={inputHandler}
          value={text}
        />
        <View>
          <Button title='Add' onPress={addGoalHandler} />
          <Button title='Cancel' onPress={cancelGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
    borderBottomColor: "lightblue",
    borderBottomWidth: 1,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#fdd",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});

export default TaskInput;
