import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Splash from './components/Splash';
import QuizOptions from './components/QuizOptions';
import Profile from './components/Profile';

export default function App() {

  const [splashScreen, setSplashScreen] = useState(true);
  const [quizData, setQuizData] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userResults, setUserResults] = useState([]);
  const [profile, setProfile] = useState(false);

  const handleSplashClick = () => {
    setSplashScreen(false);
    console.log('Splash clicked');
  };

  const onProfileClick = () => {
    setProfile(true);
    console.log('Profile clicked');
  };

  const handleProfileClose = () => {
    setProfile(false);
    console.log('Profile closed');
  };

  return (
    <View style={styles.container}>
      <Header />
      {splashScreen && (
        <Splash visible={splashScreen} onSplashClick={handleSplashClick}/>
      )}
      {!splashScreen && !quizData && profile === false && (
        <TouchableOpacity title="Profile" onPress={onProfileClick} accessabilityLabel="Click to view user profile" style={styles.button}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        )}
      {!splashScreen && profile === true && (
        <Profile onProfileClose={handleProfileClose}/>
      )}
      {!splashScreen && !quizData && profile === false && (
        <Text style={styles.welcome}>Welcome to QuizWhiz! Please choose a category, difficulty, and quiz type to start. Start your journey to Trivia Night mastery today!</Text>
      )}
      <QuizOptions />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272724',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    color: '#ffffff',
    marginTop: '1.5em',
    textAlign: 'center',
    width: '80%',
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
