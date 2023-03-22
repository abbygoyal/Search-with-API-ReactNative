import React, { useState, useEffect } from "react";
import { Text, Button, View, TextInput, StyleSheet } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const saveData = async () => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    });

    result = await result.json();
  };
  return (
    <View>
      <Text style={{ fontSize: 30, marginTop: 40 }}>
        Post API with Input Field Data
      </Text>
      <TextInput
        style={styles.input}
        placeholder=" Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder=" Enter Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder=" Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button title="Save Data" onPress={saveData} />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  input: {
    borderColor: "skyblue",
    borderWidth: 1,
    margin: 20,
    borderRadius: 5,
    fontSize: 20,
  },
});
