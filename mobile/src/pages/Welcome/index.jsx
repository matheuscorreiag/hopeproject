import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Welcome to our app :) </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={styles.buttonText}> Log out </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
