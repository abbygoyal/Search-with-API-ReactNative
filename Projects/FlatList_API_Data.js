import React, { useState, useEffect } from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

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
      <Text style={{ fontSize: 30, marginTop: 40 }}>
        FlatList with API Call
      </Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                borderBottomColor: "orange",
                borderBottomWidth: 1,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 24 }}>ID: {item.id}</Text>
              <Text style={{ fontSize: 18 }}>Title: {item.title}</Text>
              <Text style={{ fontSize: 18 }}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </ScrollView>
  );
};

export default App;
