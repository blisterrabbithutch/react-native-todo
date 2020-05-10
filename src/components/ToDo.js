import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from "./ui/AppText";

export const ToDo = ( {todo, onRemove, onOpen} ) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo} >
                <AppText style={styles.title}>{todo.title}</AppText>
            </View>    
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    },
});