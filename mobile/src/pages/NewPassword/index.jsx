import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./styles";

import api from "../../services/api";
const url = "http://192.168.0.26:3030";

const SignUp = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    token: "",
    password: "",
    passwordConfirm: "",
  });

  const changePassword = () => {
    if (
      form.email !== "" &&
      form.token !== "" &&
      form.password !== "" &&
      form.passwordConfirm !== "" &&
      form.password === form.passwordConfirm
    ) {
      api
        .post(`${url}/users/reset`, form)
        .then(() => {
          navigation.navigate("PasswordChanged");
        })
        .catch(() => {
          Alert.alert("Email or token invalid! ", "Please check the params.");
        });
    } else {
      Alert.alert("Invalid arguments! ", "Please check the params.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Check your e-mail and type your token here with your new password!
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            onChangeText={(e) => setForm({ ...form, email: e })}
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Token</Text>
          <TextInput
            onChangeText={(e) => setForm({ ...form, token: e })}
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>New password</Text>
          <TextInput
            onChangeText={(e) => setForm({ ...form, password: e })}
            secureTextEntry={true}
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Confirm new password</Text>
          <TextInput
            onChangeText={(e) => setForm({ ...form, passwordConfirm: e })}
            secureTextEntry={true}
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.changePassButton}>
            <Text onPress={changePassword} style={styles.buttonText}>
              Change my password!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
