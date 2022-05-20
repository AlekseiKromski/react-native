import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavBar} from './src/NavBar';
import { AddTodo } from './src/AddToDo';
import React, {useState} from 'react';
export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }

    setTodos((prevTodosState) => {
      return [
        ...prevTodosState, newTodo
      ]
    })
  }

  return (
    <View style={styles.container}>
      <NavBar title={'To do app'}/>
      <View style={styles.applicationContainer}>
        <AddTodo onSubmit={addTodo}/>
        <View>
          {
            todos.map(todo => {
              return <Text key={todo.id}>{todo.title}</Text>
            })
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1
  },
  applicationContainer: {
    paddingHorizontal: 18,
  }
});
