import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export const ToDo = ({todo, removeItem}) => {
    return (
       <TouchableOpacity activeOpacity={0.5} onLongPress={
           (id) => {
               removeItem(todo.id)
           }
       }>
       <View style={styles.todo} >
            <Text>{todo.title}</Text>
        </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 18,
        borderWidth: 1,
        borderColor: '#284B63',
        borderRadius: 8,
        marginTop: 18
    }
})