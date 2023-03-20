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
    setTasks((task) => [...task, text]);
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput addHandler={addHandler} />
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
  items: {
    flex: 5,
  },
  appContainer: {
    flex: 1,
    padding: 20,
    paddingHorizontal: 10,
  },
});
