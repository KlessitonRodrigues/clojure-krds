import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Calculator() {
  const [calc, setCalc] = useState({ num1, num2, op });

  function calc(num1, num2, op) {
    if (op == "+") return num1 + num2;
    else if (op == "-") return num1 - num2;
    else if (op == "/") return num1 / num2;
    else if (op == "*") return num1 * num2;
    else return num1;
  }

  function handleButton(value) {}

  function Display(props) {
    return (
      <View>
        <Text>{props.value}</Text>
      </View>
    );
  }

  function MiniDisplay() {
    return (
      <View>
        <Text>{props.value}</Text>
      </View>
    );
  }

  function Button() {}

  return (
    <View>
      <Display />
      <MiniDisplay />
      <TouchableOpacity onPress={() => handleButton(1)} />
      <TouchableOpacity onPress={() => handleButton(2)} />
      <TouchableOpacity onPress={() => handleButton(3)} />
    </View>
  );
}
