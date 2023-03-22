import React from "react";
import { Text, Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/Home";
import { Login } from "./components/Login";

const Stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.warn("button pressed");
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "skyblue",
          headerTitleStyle: {
            fontSize: 30,
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Button title="Left" onPress={btnAction} />,
            headerRight: () => <Header />,
            headerStyle: {
              backgroundColor: "orange",
            },
            headerTitleStyle: {
              fontSize: 30,
            },
            headerTintColor: "red",
          }}
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const Header = () => {
  return <Button title="btn" />;
};
