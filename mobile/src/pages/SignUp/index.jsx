import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

import api from "../../services/api";
const url = "http://192.168.0.26:3030";

const SignUp = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const SignUpForm = async () => {
    if (
      form.email !== "" &&
      form.password !== "" &&
      form.passwordConfirm !== "" &&
      form.password === form.passwordConfirm
    ) {
      await api
        .post(`${url}/signup`, form)
        .then(() => {
          Alert.alert("", "User created successfully!");
          navigation.navigate("LogIn");
        })
        .catch(() => {
          Alert.alert(
            "Error",
            "Invalid e-mail, maybe you already have a account?"
          );
        });
    } else {
      Alert.alert("Error", "Invalid arguments, please try again");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Sign Up</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> E-mail </Text>
          <TextInput
            onChangeText={(e) => setForm({ ...form, email: e })}
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> Password </Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(e) => setForm({ ...form, password: e })}
            style={styles.input}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}> Confirm password </Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(e) => setForm({ ...form, passwordConfirm: e })}
            style={styles.input}
          ></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={SignUpForm} style={styles.button}>
            <Text style={styles.buttonText}> Register Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
