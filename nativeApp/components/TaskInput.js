import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

const TaskInput = ({ addHandler, visible, hideGoalHandler }) => {
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
          <View style={styles.buttonStyles}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
          <View>
            <Button title='Cancel' onPress={hideGoalHandler} />
          </View>
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
    padding: 16,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#fdd",
    width: "100%",
  },
  ButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonStyles: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default TaskInput;
