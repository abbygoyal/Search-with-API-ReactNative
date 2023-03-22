import React, { useState, useEffect } from "react";
import { Text, Button, View, TextInput, ScrollView } from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
      <Text style={{ fontSize: 30, marginTop: 40 }}>List with API Call</Text>
      {data.length
        ? data.map((item) => (
            <View
              style={{
                padding: 10,
                borderBottomColor: "#ccc",
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ fontSize: 20 }}>Id: {item.id}</Text>
              <Text style={{ fontSize: 20 }}>TItle: {item.title}</Text>
              <Text style={{ fontSize: 20 }}>Body: {item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

export default App;
