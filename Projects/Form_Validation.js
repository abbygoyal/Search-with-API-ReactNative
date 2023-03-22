import React, { useState, useEffect } from "react";
import { Text, Button, View, TextInput, StyleSheet } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!age) {
      setAgeError(true);
    } else {
      setAgeError(false);
    }
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!name || !age || !email) {
      return false;
    }
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
      {nameError ? (
        <Text style={styles.errorText}>Please Enter Valid Name</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder=" Enter Age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      {ageError ? (
        <Text style={styles.errorText}>Please Enter Valid Age</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder=" Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? (
        <Text style={styles.errorText}>Please Enter Valid Email</Text>
      ) : null}
      <Button style={{ marginTop: 40 }} title="Save Data" onPress={saveData} />
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
  errorText: {
    color: "red",
    marginLeft: 20,
  },
});
