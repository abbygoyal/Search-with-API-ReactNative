import React, { useState, useEffect } from "react";
import { Text, Button, View, TextInput, StyleSheet } from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  const deleteUser = async (id) => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(`${url}/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      console.warn("User Deleted");
      getAPIData();
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <View style={styles.dataWrapper}>
        <View style={{ flex: 1 }}>
          <Text>Name</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>Age</Text>
        </View>
        <View style={{ flex: 1.5 }}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map((item) => (
            <View style={styles.dataWrapper}>
              <View style={{ flex: 1 }}>
                <Text>{item.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{item.age}</Text>
              </View>
              {/* <View style={{ flex: 1 }}>
                <Text>{item.email}</Text>
              </View> */}
              <View style={{ flex: 1 }}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Update" />
              </View>
            </View>
          ))
        : null}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  dataWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    margin: 5,
    padding: 8,
  },
});
