import React, { useState, useContext } from 'react';
import { NavBar } from "./components/NavBar";
import {View, StyleSheet, Alert} from "react-native";
import { THEME } from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {ToDoScreen} from "./screens/ToDoScreen";
import {TodoContext} from "./context/todo/todoContext";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext);

  return (
    <View style={styles.app}>
      <NavBar title='To Do App' />
      <View style={styles.wrapper}>
        { todoId ? <ToDoScreen/> : <MainScreen/>}
      </View>
    </View>
  )
};



const styles = StyleSheet.create({
  app: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  wrapper: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
    flex: 1,
    flexGrow: 1,
  },
});
