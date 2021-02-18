import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

const Welcome = ({ navigation }) => {
  const logOut = async () => {
    await AsyncStorage.removeItem("@MyToken");
    navigation.navigate("LogIn");
  };
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Welcome to our app :) </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={logOut}>
            <Text style={styles.buttonText}> Log out </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
