import React, { useState } from "react";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import api from "../../services/api";
const url = "http://192.168.0.26:3030";

const Forgot = ({ navigation }) => {
  const [form, setForm] = useState({ email: "" });

  const getToken = async () => {
    if (form.email !== "") {
      await api
        .post(`${url}/forgot`, form)
        .then(() => {
          Alert.alert("", "Token delivered! ");
          navigation.navigate("NewPassword");
        })
        .catch(() => {
          Alert.alert("", "Error trying to send your token! ");
        });
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Type your e-mail to reset your password!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> E-mail </Text>
          <TextInput
            onChangeText={(e) => setForm({ ...form, email: e })}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={getToken}
            style={styles.recieveTokenButton}
          >
            <Text style={styles.buttonText}> Recieve my token </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Forgot;
