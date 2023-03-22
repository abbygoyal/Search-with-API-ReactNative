import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const App = () => {
  const skills = [
    {
      id: 1,
      name: "Java",
    },
    {
      id: 2,
      name: "PHP",
    },
    {
      id: 3,
      name: "Node",
    },
    {
      id: 4,
      name: "SQL",
    },
    {
      id: 5,
      name: "React",
    },
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio === item.id ? (
                <View style={styles.radioBg}></View>
              ) : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
  radioText: {
    fontSize: 20,
    color: "skyblue",
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: "skyblue",
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: "skyblue",
    height: 29,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
