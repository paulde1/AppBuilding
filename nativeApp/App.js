import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Motion } from "@legendapp/motion";
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

function App() {
  const [tasks, setTasks] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const value = 0;

  const changeModalView = () => {
    setVisibleModal(true);
  };

  const hideGoalHandler = () => {
    setVisibleModal(false);
  };

  const addHandler = (entered) => {
    setTasks((task) => [
      ...task,
      { text: entered, id: Math.random().toString() },
    ]);
    hideGoalHandler();
  };

  const deleteTask = (id) => {
    setTasks((currentTask) => {
      return currentTask.filter((t) => t.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add new task'
          color='crimson'
          onPress={changeModalView}
        />
        <Motion.Pressable>
          <Motion.View
            whileHover={{ scale: 1.2 }}
            whileTap={{ y: 20 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
          />
        </Motion.Pressable>
        {visibleModal && (
          <TaskInput
            visible={visibleModal}
            addHandler={addHandler}
            hideGoalHandler={hideGoalHandler}
          />
        )}
        <Motion.View
          initial={{ y: -50 }}
          animate={{ x: value * 100, y: 0 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ y: 20 }}
          transition={{ type: "spring" }}
        >
          {/* <View style={styles.items}> */}
          <Motion.Text
            animate={{
              color: value ? "#F81FEC" : "#59B0F8",
              fontSize: value ? 48 : 24,
            }}
          >
            {" "}
            Things I need to do ...{" "}
          </Motion.Text>
          <Motion.FlatList
            initial={{ y: -50 }}
            animate={{ x: value * 100, y: 0 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ y: 20 }}
            transition={{ type: "spring" }}
            data={tasks}
            renderItem={({ item, index }) => {
              return (
                <>
                  <TaskItems
                    text={item.text}
                    id={item.id}
                    index={index}
                    onDeleteItem={deleteTask}
                  />
                </>
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </Motion.View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  items: {
    flex: 5,
  },
  appContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 250,
    paddingHorizontal: 10,
    backgroundColor: "#1d6d98",
  },
});

export default App;
