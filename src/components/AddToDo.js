import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Keyboard } from 'react-native';
import { THEME } from '../theme';
import { AntDesign } from '@expo/vector-icons';

export const AddToDo = ({ onSubmit }) => {
    const [value, setValue] = useState(''); 

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Название заметки не может быть пустым');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input} 
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите название"
                autoCorrect={false}
                autoCapitalize='sentences'
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        flexGrow: 1,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        marginRight: 15,
        padding: 10,
    },
});