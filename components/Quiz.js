import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';
import QuizQuestion from './QuizQuestion';
import ProgressBar from './ProgressBar';
import QuestionCount from './QuestionCount';

export default function Quiz({ route, navigation }) {
  const { data } = route.params;
  const [selectedAnswers, setSelectedAnswers] = useState(Array(data.length).fill(''));
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [progress, setProgress] = useState(new Animated.Value(1));
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [score, setScore] = useState(0);

  const validateAnswer = (selectedOption, navigation) => {
    if (isOptionsDisabled === false) {
      let correct_option = data[currentQuestionIndex].correct_answer;
      setCurrentOptionSelected(selectedOption);
      setCorrectOption(correct_option);
      setIsOptionsDisabled(true);
      if (selectedOption === correct_option) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = (navigation) => {
    if (currentQuestionIndex == data.length - 1) {
      navigation.navigate('Results', {score: score, totalQuestions: data.length});
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
    }
    Animated.parallel([
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 2,
        duration: 2000,
        useNativeDriver: false,
      }),
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
      ]),
    ]).start();
  };

  const renderOptions = (navigation) => {
    return (
      <View style={{ marginTop: 100 }}>
        {data[currentQuestionIndex]?.shuffledOptions.map((option, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: fadeAnim,
              transform: [
                {
                  translateY: fadeAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [(150 / 4) * (index + 10), 0],
                  }),
                },
              ],
            }}
          >
            <TouchableOpacity
              onPress={() => validateAnswer(option, navigation)}
              key={index}
              style={[
                { ...styles.optionsText },
                {
                  backgroundColor: isOptionsDisabled
                    ? option === correctOption
                      ? '#28a745'
                      : option === currentOptionSelected
                      ? '#dc3545'
                      : '#6c757d'
                    :'#007bff',
                },
              ]}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 16,
                }}
              >
                {option}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    )};

  return (
    <ScrollView style={styles.scrollView}>
      <Text>Hello World</Text>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ProgressBar progress={progress} />
          <QuestionCount
            index={currentQuestionIndex}
            question={data[currentQuestionIndex]?.question}
          />
        </View>
        {renderOptions(navigation)}
      </View>
      <View style={{ position: 'absolute', bottom: -75, right: 20 }}>
        <TouchableOpacity
          style={[
            { ...styles.btnNext },
            {
              backgroundColor: !currentOptionSelected ? '#6c757d' : '#007bff',
            },
          ]}
          disabled={!currentOptionSelected}
          onPress={() => handleNextQuestion(navigation)}
        >
          <Text style={styles.btnNextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#272724',
  },
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  subContainer: {
    marginTop: 50,
    marginVertical: 10,
    padding: 40,
    borderTopRightRadius: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -6, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  optionsText: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 10,
    paddingHorizontal: 30,
    shadowColor: '#171717',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnNext: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#efd356',
  },
  btnNextText: {
    color: 'black',
    fontSize: 20,
  },
});