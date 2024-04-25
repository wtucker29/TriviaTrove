import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Animated } from 'react-native';
import shuffle from 'lodash/shuffle';
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


  const shuffledQuestions = data.map((question) => {
    const shuffledOptions = shuffle([...question.incorrect_answers, question.correct_answer]);
    return {
      ...question,
      shuffledOptions: shuffledOptions,
    };
  });
  console.log('shuffledoptions: ', shuffledQuestions);
  // const options = shuffle([...data.incorrect_answers, data.correct_answer]);
  // console.log(options);
  // setShuffledOptions(options);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <ProgressBar progress={progress} />
          <QuestionCount
            index={currentQuestionIndex}
            question={data[currentQuestionIndex]?.question}
          />
        </View>
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
});