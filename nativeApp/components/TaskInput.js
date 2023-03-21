import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const TaskInput = ({ addHandler }) => {
  const [text, setText] = useState("");

  const inputHandler = (enteredText) => {
    setText(enteredText);
  };

  const addGoalHandler = () => {
    addHandler(text);
    setText("");
  };

  return (
    <Modal>
      <View style={styles.addItem}>
        <TextInput
          style={styles.inputText}
          placeholder='I have to...'
          onChangeText={inputHandler}
          value={text}
        />
        <Button title='Add' onPress={addGoalHandler} />
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
