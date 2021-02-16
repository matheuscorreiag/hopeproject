import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Check your e-mail and type your token here with your new password!
          </Text>
        </View>
        <View>
          <Text style={styles.inputLabel}>Token</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>New password</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}>Confirm new password</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.changePassButton}>
            <Text style={styles.buttonText}> Change my password! </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
