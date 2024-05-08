import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useProfile } from './ProfileContext';

export default function Results({ navigation, route }) {
  const { updateProfileData } = useProfile();
  const { score, totalQuestions } = route.params;
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

  const handleQuizCompletion =  () => {
    updateProfileData(score, totalQuestions);
    navigation.navigate('Profile');
    home();
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 50, color: 'white' }}>Your Score</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.totalQuestions}>/{totalQuestions}</Text>
        </View>
        {/** Add a button to navigate to the Profile screen */}
        <TouchableOpacity
          title="Profile"
          onPress={handleQuizCompletion}
          accessabilityLabel="Click to visit updated profile"
          style={styles.btn}
        >
          <Text style={styles.btnText}>Profile</Text>
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
  subContainer: {
    width: "90",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
  },
  score: {
    fontSize: 100,
    color: "#ffffff",
  },
  totalQuestions: {
    fontSize: 100,
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