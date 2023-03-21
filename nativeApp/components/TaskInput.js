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
        <View style={styles.ButtonContainer}>
          <Button title='Add' onPress={addGoalHandler} />
          <Button title='Hide' onPress={cancelGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addItem: {
    flex: 1,
    justifyContent: "center",
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
  ButtonContainer: {
    flexDirection: "row",
  },
});

export default TaskInput;
