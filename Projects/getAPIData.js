import React, { useState, useEffect } from "react";
import { Text, Button, View, TextInput } from "react-native";

const App = () => {
  const [data, setData] = useState(undefined);
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
    <View>
      <Text style={{ fontSize: 30, marginTop: 40 }}>API Call</Text>
      {data ? (
        <View>
          <Text style={{ fontSize: 30 }}>{data.id}</Text>
          <Text style={{ fontSize: 30 }}>{data.userId}</Text>
          <Text style={{ fontSize: 30, marginBottom: 40 }}>{data.title}</Text>
          <Text style={{ fontSize: 30 }}>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default App;
