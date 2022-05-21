import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = props => {

    const [value, setValue] = useState('');
    return (
        <View style={styles.wrapper}>
            <TextInput
                onChangeText={setValue}
                value={value} 
                style={styles.input}
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Button onPress={() => {
                if(value !== '') {
                    props.onSubmit(value)
                    setValue('')
                }else{
                    alert("Название не может быть пустым")
                }
            }} title='Добавить'/>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '100%',
        marginTop: 18
    },
    input: {
        width: '70%',
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3C6E71"
    }
})