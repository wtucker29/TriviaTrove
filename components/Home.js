import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Animated } from 'react-native';

export default function Home({ navigation }) {

  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const homeNav = () => {
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
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>TriviaTrove</Text>
      </View>
      <TouchableOpacity
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
          homeNav();
        }}
        accessabilityLabel="Click to view user profile"
        style={styles.btn}
      >
        <Text style={styles.btnText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Start Quiz"
        onPress={() => {
          navigation.navigate('QuizOptions');
          homeNav();
        }}
        accessabilityLabel="Click to select quiz options"
        style={styles.btn}
      >
        <Text style={styles.btnText}>Start a Quiz</Text>
      </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  btn: {
    backgroundColor: "#efd356",
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: "relative",
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    letterSpacing: 1.1,
  },
});