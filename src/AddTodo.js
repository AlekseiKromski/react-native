import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {

    const [value,setValue] = useState('')


    const pressHandler = () => {
        if(value.trim() != ''){
            onSubmit(value)
            setValue('')
        }else{
            Alert.alert('Ошибка', 'Название дела не может быть пустым');
        }
        
    }

    return (
        <View style={styles.addtodo}>
            <TextInput
             placeholder='Введите название дела'
             style={styles.input}
             value={value}
             onChangeText={setValue}></TextInput>
            <Button title='Добавить' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    addtodo: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
        alignItems: 'flex-end'
    },
    input: {
        marginRight: 10,
        width: "70%",
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: "#14213D"
    }
})