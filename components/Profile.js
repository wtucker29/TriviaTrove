import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import { useProfile } from './ProfileContext';

export default function Profile({ navigation, route }) {
  const { score, questions } = useProfile();
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const home = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <View style={styles.container} >
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Overall Quiz Average:</Text>
        <Text style={styles.text}>Total Score: {score}</Text>
        <Text style={styles.text}>Total Questions: {questions}</Text>
        <Text style={styles.text}>Average Score: {((score / questions) * 100).toFixed(2)}%</Text>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity
          title="Return to Home"
          onPress={() => {
            navigation.navigate('Home');
            home();
          }}
          accessabilityLabel="Click to return to home page"
          style={styles.btn}
        >
          <Text style={styles.btnText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272724",
    alignItem: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  subContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  headingText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#efd356",
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: "relative",
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    letterSpacing: 1.1,
  },
});