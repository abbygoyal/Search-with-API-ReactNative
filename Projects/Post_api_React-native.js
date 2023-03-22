import React, { useState, useEffect } from "react";
import { Text, Button, View, TextInput } from "react-native";

const App = () => {
  const saveAPIData = async () => {
    const data = {
      name: "Tony",
      age: 21,
      email: "Tony@test.com",
    };
    // In your API/URL directly use http://10.0.2.2:[your port]/ and under emulator setting add the proxy address as 10.0.2.2 with the port number.
    // '10.0.2.2' is used to access backend app from android emulator, '6001' is the port on which backend app is running.
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Post API Call</Text>
      <Button title="Save Data" onPress={saveAPIData} />
    </View>
  );
};

export default App;
