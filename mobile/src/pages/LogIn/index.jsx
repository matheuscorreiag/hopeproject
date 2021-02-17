import React, { useState } from "react";

import { Text, View, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";
const url = "http://192.168.0.26:3030";

import styles from "./styles";

const LogIn = ({ navigation }) => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const logInPlataform = async () => {
    if (login.email !== "" && login.password !== "") {
      try {
        const response = await api.post(`${url}/users/authenticate`, login);
        const { token } = response.data;
        await AsyncStorage.setItem("@MyToken", token);

        navigation.navigate("Welcome");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View>
          <Text style={styles.title}>Log In</Text>
        </View>
        <View>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput
            onChangeText={(e) => setLogin({ ...login, email: e })}
            style={styles.input}
          ></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            onChangeText={(e) => setLogin({ ...login, password: e })}
            style={styles.input}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={logInPlataform} style={styles.logInButton}>
            <Text style={styles.buttonText}> Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPassContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
            <Text style={styles.forgotPassButton}> Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.newHere}> New here? </Text>
            <Text style={styles.signUp}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LogIn;
