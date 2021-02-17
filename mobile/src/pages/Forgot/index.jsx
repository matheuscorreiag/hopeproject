import React, { useState } from "react";
import { View, Text, Alert } from "react-native";

import styles from "./styles";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import api from "../../services/api";
const url = "http://192.168.0.26:3030";

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const getToken = async () => {
    if (email !== "") {
      try {
        const response = await api.post(`${url}/users/forgot`, email);
        Alert.alert("", "Token enviado");
        navigation.navigate("NewPassword");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
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
          <TextInput onChangeText={(e) => setEmail(e)} style={styles.input} />
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
