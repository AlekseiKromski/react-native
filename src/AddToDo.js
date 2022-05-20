import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native';

export const AddTodo = props => {

    return (
        <View style={styles.wrapper}>
            <TextInput style={styles.input} />
            <Button onPress={() => {
                props.onSubmit('est')
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