import React, { useReducer, useContext } from 'react';
import { TodoContext } from './todoContext.js';
import { todoReducer } from "./todoReducer";
import {Alert} from 'react-native';
import {REMOVE_TODO, ADD_TODO, UPDATE_TODO} from "../types";
import {ScreenContext} from "../screen/screenContext";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: []
  };

  const { changeScreen } = useContext(ScreenContext);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = title => dispatch({ type: ADD_TODO, title: title });
  const removeTodo = id => {
    const todo = state.todos.find(t => t.id === id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel'
        },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id: id });
          }
        }
      ],
      { cancelable: false }
    );
  };
  const updateTodo = ( id, title ) => dispatch({ type: UPDATE_TODO, id: id, title: title });

  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      addTodo, removeTodo, updateTodo
    }}>{children}</TodoContext.Provider>
  )
};