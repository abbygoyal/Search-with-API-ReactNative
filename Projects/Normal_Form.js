import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Touchable } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [secure, setSecure] = useState(true);

  const clearDetails = () => {
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  };

  const onPressTitle = () => {
    setSecure(!secure);
  };
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        Hello React Native
      </Text>
      <TextInput
        style={style.textInput}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter User Name"
      />
      <TextInput
        style={style.textInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Enter User Email"
      />
      <View
        style={{
          // fontSize: 16,
          borderWidth: 2,
          margin: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "black",
        }}
      >
        <TextInput
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={secure}
          value={password}
          placeholder="Enter User Password"
        />

        <Text onPress={onPressTitle} style={{ marginRight: 5 }}>
          Show
        </Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Button title="Get Details" onPress={() => setDisplay(true)} />
      </View>
      <Button onPress={clearDetails} title="Clear Details" />

      {display ? (
        <View>
          <Text>Name :{name}</Text>
          <Text>Email :{email}</Text>
          <Text>Password :{password}</Text>
        </View>
      ) : null}
    </View>
  );
}

const style = StyleSheet.create({
  textInput: {
    fontSize: 16,
    borderWidth: 2,
    margin: 10,

    borderColor: "black",
  },
});

export default App;
