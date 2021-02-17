import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const PasswordChanged = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.imageContainer}>
          <Ionicons name="checkmark-circle" size={80} color="#F0386B" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Your password has been successfully changed!
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.logInButton}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={styles.buttonText}> Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PasswordChanged;
