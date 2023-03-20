import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputHandler = (enteredText) => {
    setText(enteredText);
  };

  const addHandler = () => {
    setTasks((tasks) => [...tasks, text]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.addItem}>
        <TextInput
          style={styles.inputText}
          placeholder='I have to...'
          onChangeText={inputHandler}
        />
        <Button title='Add' onPress={addHandler} />
      </View>
      <View style={styles.items}>
        <Text> Things I need to do ... </Text>
        {tasks.map((task, index) => (
          <Text style={styles.item} key={index}>
            Task number {index + 1}: {task}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 65,
    paddingHorizontal: 16,
  },
  addItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "lightBlue",
    borderBottomWidth: 1,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#fdd",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
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
});
