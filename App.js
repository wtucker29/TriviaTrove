import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Splash from './components/Splash';
import QuizOptions from './components/QuizOptions';
import Profile from './components/Profile';
import Quiz from './components/Quiz';
import axios from 'axios';

const Stack = createStackNavigator();

export default function App() {

  const [splashScreen, setSplashScreen] = useState(true);
  const [quizData, setQuizData] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [userResults, setUserResults] = useState([]);
  const [profile, setProfile] = useState(false);

  // const handleQuizStart = async (quizOptions) => {
  //   try {
  //     const response = await axios.get(`https://opentdb.com/api.php?amount=${quizOptions.amount}&category=${quizOptions.category}&difficulty=${quizOptions.difficulty}&type=${quizOptions.type}`);
  //     setQuizData(response.data);
  //   } catch {
  //     console.error('Error fetching quiz data');
  //   }
  // };

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

  const handleAnswerSubmit = (userResponses) => {
    if (quizData) {
      const results = [];
      let score = 0;
      const questionsDenom = quizData.length;
      quizData.forEach((quiz, index) => {
        if (quiz.correct_answer === userResponses[index]) {
          score++;
        }
        results.push({
          question: quiz.question,
          correctAnswer: quiz.correct_answer,
          userAnswer: userResponses[index],
        });
      });
      setUserScore(score);
      setTotalQuestions(questionsDenom);
      setUserResults(results);

      const postData = {
        category: quizData[0].category,
        difficulty: quizData[0].difficulty,
        score: score,
        total_questions: questionsDenom,
      };

      console.log('PostData:', postData);

      // try {
      //   const response = axios.post('http://localhost:3000/quiz/results', postData);
      //   console.log('Score submitted successfully', response.data);
      // } catch (err) {
      //   console.error('Error submitting score: ', err);
      // }
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#272724"
            },
            backgroundColor: "#272724",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
            headerStyle: {
              backgroundColor: "#272724"
            },
            backgroundColor: "#272724",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="QuizOptions"
          component={QuizOptions}
          options={{
            title: "Quiz Options",
            headerStyle: {
              backgroundColor: "#272724"
            },
            backgroundColor: "#272724",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{
            title: "Quiz",
            headerStyle: {
              backgroundColor: "#272724"
            },
            backgroundColor: "#272724",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <ScrollView contentContainerStyle={styles.container} nestedScrollEnabled={true} bounces={false}>
    //   <Header />
    //   {splashScreen && (
    //     <Splash visible={splashScreen} onSplashClick={handleSplashClick}/>
    //   )}
    //   {!splashScreen && !quizData && profile === false && (
    //     <TouchableOpacity title="Profile" onPress={onProfileClick} accessabilityLabel="Click to view user profile" style={styles.button}>
    //       <Text style={styles.buttonText}>Profile</Text>
    //     </TouchableOpacity>
    //     )}
    //   {!splashScreen && profile === true && (
    //     <Profile onProfileClose={handleProfileClose}/>
    //   )}
    //   {splashScreen && !quizData && profile === false && (
    //     <Text style={styles.welcome}>Welcome to QuizWhiz! Please choose a category, difficulty, and quiz type to start. Start your journey to Trivia Night mastery today!</Text>
    //   )}
    //   {!splashScreen && !quizData && profile === false && (
    //     <QuizOptions handleQuizStart={handleQuizStart}/>
    //   )}
    //   {!splashScreen && quizData && userScore === null && (
    //     <Quiz quizData={quizData} onAnswerSubmit={handleAnswerSubmit} />
    //   )}
    //   <StatusBar style="auto" />
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1.5em',
    backgroundColor: '#272724'
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
