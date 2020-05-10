import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { AddToDo } from '../components/AddToDo';
import { ToDo } from '../components/ToDo';
import {THEME} from "../theme";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";

export const MainScreen = () => {
  const { addTodo, removeTodo, todos } = useContext(TodoContext);
  const {changeScreen} = useContext(ScreenContext);
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 2 * THEME.PADDING_HORIZONTAL);

  useEffect(() => {
    const update = () => {
      const width = Dimensions.get('window').width - 2 * THEME.PADDING_HORIZONTAL;
      setDeviceWidth(width);
    };

    Dimensions.addEventListener('change', update);

    return () => {
      Dimensions.removeEventListener('change', update);
    }
  });

  let content = (
    <View style={{ ...styles.todolistwrapper, width: deviceWidth }}>
      <FlatList
        style={styles.todolist}
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({item}) => (
          <ToDo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
        )}
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../assets/no-items.png')} />
      </View>
    )
  }

  return (
      <View style={styles.mainscreenwrapper}>
          <AddToDo onSubmit={addTodo}/>

          { content  }
      </View>     
  )
}


const styles = StyleSheet.create({
    imageWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      height: 300,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    mainscreenwrapper: {
      flexGrow: 1,
      height: 50,
    },
    todolistwrapper: {
      flexGrow: 1,
      height: 50,
    },
    todolist: {
      height: 50,
      flexGrow: 1,
    },
    wrapper: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20,
      flex: 1,
      flexGrow: 1,
    },
    regularText: {
      color: '#000',
      fontSize: 26
    }
});