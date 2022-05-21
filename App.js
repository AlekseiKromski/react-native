import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {NavBar} from './src/NavBar';
import { AddTodo } from './src/AddToDo';
import React, {useState} from 'react';
import {ToDo} from './src/ToDo'
export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }

    setTodos((prevTodosState) => {
      return [
        newTodo, ...prevTodosState
      ]
    })
  }

  const removeItem = (id) => {
    let todos_ = todos.filter(todo =>{
      if(todo.id !== id){
        return todo
      }
    })
    setTodos(todos_)
  }

  return (
    <View style={styles.container}>
      <NavBar title={'To do app'}/>
      <View style={styles.applicationContainer}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <ToDo removeItem={removeItem} todo={item}></ToDo>
          }}
        />
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
