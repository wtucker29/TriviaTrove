import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function Splash({ onSplashClick }) {
  return (
    <View style={styles.container} >
      <TouchableOpacity title="Enter" onPress={onSplashClick} accessabilityLabel="Click to enter trivia application" style={styles.button}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5em auto',
  },
  button: {
    backgroundColor: '#efd356',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});