import React, { useState } from "react";
import { Button } from "react-native";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

const App = () => {
  const [show, setShow] = useState(false);
  const displayLoader = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  return (
    <View style={styles.main}>
      <ActivityIndicator size={100} color="red" animating={show} />
      <Button title="show loader" onPress={displayLoader} />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
