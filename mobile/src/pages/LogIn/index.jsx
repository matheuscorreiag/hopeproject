import React from "react";

import { Text, View, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";

const LogIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View>
          <Text style={styles.title}>Log In</Text>
        </View>
        <View>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.logInButton}>
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
