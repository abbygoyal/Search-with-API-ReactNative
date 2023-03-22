import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Dialog Box React Native</Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setShowModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button
          title="Open Modal"
          onPress={() => {
            setShowModal(true);
          }}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    padding: 40,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  },
});
