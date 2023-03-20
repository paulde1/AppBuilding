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
import TaskItems from "./components/TaskItems";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addHandler = (text) => {
    setTasks((tasks) => [...tasks, text]);
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput addHandler={addHandler} />
      {/* <View style={styles.addItem}>
        <TextInput
          style={styles.inputText}
          placeholder='I have to...'
          onChangeText={inputHandler}
        />
        <Button title='Add' onPress={addHandler} />
      </View> */}
      <View style={styles.items}>
        <Text> Things I need to do ... </Text>
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => {
            return <TaskItems item={item} index={index} />;
          }}
        />
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
});
