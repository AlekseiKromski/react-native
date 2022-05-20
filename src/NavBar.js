import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
export const NavBar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: "#3C6E71",
        paddingBottom: 10,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 24
    }
})