import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function QuizOptions() {
  return (
    <View style={styles.container}>
      <Text style={styles.optionsText}>Quiz Options Go Here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  optionsText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});