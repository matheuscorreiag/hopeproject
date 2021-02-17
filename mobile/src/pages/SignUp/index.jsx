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
      try {
        const response = await api.post(`${url}/users/signup`, form);
        Alert.alert("", "Usuário criado com sucesso");
        navigation.navigate("LogIn");
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
          <Text style={styles.title}> Sign Up</Text>
        </View>
        <View>
          <Text style={styles.inputLabel}> E-mail </Text>
          <TextInput
            onChangeText={(e) => setForm({ ...form, email: e })}
            style={styles.input}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}> Password </Text>
          <TextInput
            secureTextEntry={true}
            onChangeText={(e) => setForm({ ...form, password: e })}
            style={styles.input}
          ></TextInput>
        </View>
        <View>
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
