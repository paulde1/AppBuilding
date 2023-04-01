import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Motion } from "@legendapp/motion";
import { StyleSheet } from "react-native";
import TaskItems from "./components/TaskItems";
import TaskInput from "./components/TaskInput";

const { Text, View, Pressable, FlatList, Image, ScrollView, SectionList } =
  Motion;

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
        <Pressable
          className='items-center justify-center p-4'
          animate={{ x: value * 50 }}
          onPress={changeModalView}
          style={styles.button}
        >
          <Text style={styles.buttonText}> Add Task </Text>
        </Pressable>
        {visibleModal && (
          <TaskInput
            visible={visibleModal}
            addHandler={addHandler}
            hideGoalHandler={hideGoalHandler}
          />
        )}
        <View style={styles.view}>
          {tasks.length ? (
            <FlatList
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
            <Text style={styles.listText}>
              {" "}
              Hint: Press "Add Task" and start getting things done...
            </Text>
          )}
        </View>
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
    padding: 30,
    paddingTop: 150,
    paddingHorizontal: 10,
    backgroundColor: "#1d6d98",
    alignItems: "center",
    color: "#efe5d5",
  },
  view: {
    backgroundColor: "#ebd5b3",
    marginBottom: 70,
    width: "100%",
  },
  button: {
    backgroundColor: "#b43757",
    width: "70%",
    padding: 10,
    alignItems: "center",
    textAlign: "center",
  },
  listText: {
    color: "#efe5d5",
    backgroundColor: "#1d6d98",
    textAlign: "center",
    paddingTop: 10,
    fontSize: 16,
  },
  buttonText: {
    color: "#efe5d5",
    fontSize: 20,
  },
});

export default App;
