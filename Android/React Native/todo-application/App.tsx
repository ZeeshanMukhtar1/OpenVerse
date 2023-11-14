import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming Ionicons is the icon library used

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasksList([
        ...tasksList,
        { id: Date.now(), task: task, completed: false },
      ]);
      setTask("");
    }
  };

  const handleRemoveTask = (id: number) => {
    const updatedTasks = tasksList.filter((item) => item.id !== id);
    setTasksList(updatedTasks);
  };

  const handleToggleTask = (id: number) => {
    const updatedTasks = tasksList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasksList(updatedTasks);
  };

  const calculateTasksCount = () => {
    const totalTasks = tasksList.length;
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const remainingTasks = totalTasks - completedTasks;
    return { totalTasks, completedTasks, remainingTasks };
  };

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity
      style={[
        styles.taskContainer,
        { backgroundColor: item.completed ? "#90EE90" : "#FFFFFF" }, // Change background color based on completion status
      ]}
      onPress={() => handleToggleTask(item.id)}
    >
      <Text style={styles.taskText}>{item.task}</Text>
      <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const sortedTasks = [...tasksList].sort((a, b) => {
    if (a.completed === b.completed) {
      return 0;
    }
    return a.completed ? 1 : -1;
  });

  const { totalTasks, completedTasks, remainingTasks } = calculateTasksCount();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>
          <Ionicons name="add-circle" size={15} color="white" />
        </Text>
      </TouchableOpacity>
      <Text style={styles.taskCounts}>
        Total Tasks: {totalTasks} | Completed: {completedTasks} | Remaining:{" "}
        {remainingTasks}
      </Text>
      <FlatList
        style={styles.tasksList}
        data={sortedTasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  addButton: {
    backgroundColor: "#61dafe",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#fff",
    paddingHorizontal: 30,
  },
  tasksList: {
    width: "100%",
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
  },
  removeText: {
    color: "red",
  },
  taskCounts: {
    marginBottom: 10,
  },
});

export default TodoApp;
