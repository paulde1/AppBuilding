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
      <Motion.View style={styles.appContainer}>
        <Motion.Pressable
          className='items-center justify-center p-4'
          animate={{ x: value * 50 }}
          onPress={changeModalView}
        >
          <Motion.Text className='font-bold text-white'> Add Task </Motion.Text>
        </Motion.Pressable>
        {visibleModal && (
          <TaskInput
            visible={visibleModal}
            addHandler={addHandler}
            hideGoalHandler={hideGoalHandler}
          />
        )}
        <Motion.View style={styles.view}>
          {tasks.length ? (
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
          ) : (
            <Motion.Text style={styles.text}>
              {" "}
              Add things you need to do
            </Motion.Text>
          )}
        </Motion.View>
      </Motion.View>
    </>
  );
}

const styles = StyleSheet.create({
  items: {
    flex: 5,
  },
  appContainer: {
    flex: 1,
    padding: 30,
    paddingTop: 150,
    paddingHorizontal: 10,
    backgroundColor: "#1d6d98",
    alignItems: "center",
  },
  view: {
    backgroundColor: "#ebd5b3",
    marginBottom: 70,
    width: "100%",
  },
  button: {
    backgroundColor: "#59B0F8",
  },
  text: {
    color: "#efe5d5",
    backgroundColor: "#1d6d98",
  },
});

export default App;
