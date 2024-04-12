import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import ProfileTable from './ProfileTable';

export default function Profile({ onProfileClose }) {
  return (
    <View style={styles.container} >
      <View style={styles.section}>
        <Text style={styles.heading}>Overall Quiz Average:</Text>
        <Text style={styles.overall}>Total Score: 4</Text>
        <Text style={styles.overall}>Total Questions: 5</Text>
        <Text style={styles.overall}>Average Score: 75%</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Quiz History:</Text>
        <ProfileTable />
      </View>
      <View style={styles.section}>
        <TouchableOpacity title="Profile" onPress={onProfileClose} accessabilityLabel="Click to view user profile" style={styles.button}>
          <Text style={styles.buttonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5em auto',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  overall: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 5,
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