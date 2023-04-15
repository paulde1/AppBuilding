import { useState } from "react";
import { StyleSheet, Modal } from "react-native";
import { Motion } from "@legendapp/motion";
const { View, Button, TextInput, Image } = Motion;

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
        <Image
          style={styles.image}
          source={require("../assets/images/taskpic.png")}
        />
        <TextInput
          style={styles.inputText}
          placeholder='I have to...'
          onChangeText={inputHandler}
          value={text}
        />
        <View style={styles.ButtonContainer}>
          <View style={styles.buttonStyles}>
            <Button title='Add' onPress={addGoalHandler} color={"#fed361"} />
          </View>
          <View>
            <Button
              title='Cancel'
              onPress={hideGoalHandler}
              color={"#a0a1a1"}
            />
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
    padding: 16,
    backgroundColor: "#1d6d86",
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#effaf6",
    width: "100%",
    backgroundColor: "#effaf6",
    color: "#3a393f",
    padding: 18,
    borderRadius: 8,
  },
  ButtonContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  buttonStyles: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TaskInput;
