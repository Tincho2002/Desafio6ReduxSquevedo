import React, { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { decrement, increment, reset } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";

import { Provider } from "react-redux";
import store from "./store/index";
import { styles } from "./styles";

const AppCounter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  console.log("🚀 ~ file: index.jsx:16 ~ AppCounter ~ counter:", counter);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter-Redux</Text>
      <Text style={styles.text}>{counter.counter}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight
          style={{ ...styles.button, backgroundColor: "lightcoral" }}
          onPress={() => dispatch(decrement())}
        >
          <Text>-</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ ...styles.button, backgroundColor: "lightgray" }}
          onPress={() => dispatch(reset())}
        >
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ ...styles.button, backgroundColor: "lightsteelblue" }}
          onPress={() => dispatch(increment())}
        >
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppCounter />
    </Provider>
  );
}

