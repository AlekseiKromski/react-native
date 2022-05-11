import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Navbar } from './src/Navbar';
import {AddTodo} from './src/AddTodo'
import {ToDo} from './src/ToDo'

import {useState} from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
    }

    setTodos((prevState) => {
      console.log(prevState)
      return [
        newTodo,
        ...prevState
        
      ]
    })

    console.log(todos);
  }

  return (
    <View>
      <Navbar title="Todo app"></Navbar>

      <View style={styles.container}>

        <AddTodo onSubmit={addTodo}></AddTodo>
        <View>
          {
            todos.map(todo => <ToDo key={todo.id} todo={todo}/>)
          }
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  }
});
