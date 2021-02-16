import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Forgot = () => {
  return <View style={styles.container}>
    <View style={styles.groupContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Type your e-mail to reset your password!</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}> E-mail </Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.recieveTokenButton}>
          <Text style={styles.buttonText}> Recieve my token </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>;
}

export default Forgot;