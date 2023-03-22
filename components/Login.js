import { useState } from "react";
import { Text, Button, View, TextInput } from "react-native";

export const Login = (props) => {
  const [name, setName] = useState("");
  const age = 25;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>Login Screen</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderColor: "black",
          borderWidth: 2,
          padding: 10,
          borderRadius: 5,
          margin: 20,
        }}
        onChangeText={(text) => setName(text)}
        placeholder="Enter Name"
      />
      <Button
        title="Go to Home page"
        onPress={() =>
          props.navigation.navigate("Home", { name: name, age: age })
        }
      />
    </View>
  );
};
