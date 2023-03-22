import React, { useState, useEffect } from "react";
import { Text, Button, View, TextInput, StyleSheet, Modal } from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSeletedUser] = useState(undefined);

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

  const updateUser = (data) => {
    setShowModal(true);
    setSeletedUser(data);
  };
  const searchUser = async (text) => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  return (
    <View style={{ flex: 1, paddingTop: 30 }}>
      <TextInput
        style={{
          borderColor: "orange",
          borderWidth: 1,
          margin: 10,
          fontSize: 20,
        }}
        placeholder=" Search"
        onChangeText={(text) => searchUser(text)}
      />
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
              <View style={{ flex: 1, paddingRight: 10 }}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View style={{ flex: 1 }}>
                <Button title="Update" onPress={() => updateUser(item)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={showModal} transparent={true}>
        <UserModal
          setShowModal={setShowModal}
          selectedUser={selectedUser}
          getAPIData={getAPIData}
        />
      </Modal>
    </View>
  );
};

const UserModal = (props) => {
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
    }
  }, [props.selectedUser]);

  const updateUser = async () => {
    console.warn(name, age, email, props.selectedUser.id);
    const url = "http://10.0.2.2:3000/users";
    const id = props.selectedUser.id;
    let result = await fetch(`${url}/${id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    if (result) {
      console.warn(result);
      props.getAPIData();
      props.setShowModal(false);
    }
  };
  return (
    <View style={styles.ceneteredView}>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Age"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={{ marginBottom: 10 }}>
          <Button title="Save" onPress={updateUser} />
        </View>
        <Button title="Close" onPress={() => props.setShowModal(false)} />
      </View>
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
  ceneteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "skyblue",
    width: 250,
    marginBottom: 15,
    borderRadius: 5,
  },
});
