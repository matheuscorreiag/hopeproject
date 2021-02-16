import React from "react";
import { View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Sign Up</Text>
        </View>
        <View>
          <Text style={styles.inputLabel}> E-mail </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}> Password </Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text style={styles.inputLabel}> Confirm password </Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Register Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
