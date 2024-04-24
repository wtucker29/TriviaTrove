import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated, Image } from 'react-native';

export default function Splash({ navigation }) {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));

  const startQuiz = () => {
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
      <Image style={styles.image} source={require("../assets/favicon.png")} />
      <View style={styles.subContainer}>
        <Text style={styles.text}>Welcome to TriviaTrove!</Text>
      </View>
      <TouchableOpacity
        title="Enter"
        onPress={() => {
          navigation.navigate('QuizOptions');
          startQuiz();
        }}
        accessabilityLabel="Click to enter trivia application"
        style={styles.btn}
      >
        <Text style={styles.btnText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    letterSpacing: 1.1,
  },
});

// export default function Splash({ onSplashClick }) {
//   return (
//     <View style={styles.container} >
//       <TouchableOpacity title="Enter" onPress={onSplashClick} accessabilityLabel="Click to enter trivia application" style={styles.button}>
//         <Text style={styles.buttonText}>Enter</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '1.5em auto',
//   },
//   button: {
//     backgroundColor: '#efd356',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'black',
//     fontSize: 20,
//   },
// });