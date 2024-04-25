import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import QuizQuestion from './QuizQuestion';

export default function Quiz({ route, onAnswerSubmit }) {
  const { data } = route.params;
  const [selectedAnswers, setSelectedAnswers] = useState(Array(data.length).fill(''));
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const options = shuffle([...quiz.incorrect_answers, quiz.correct_answer]);
    setShuffledOptions(options);
  }, [quiz]);

  const handleAnswerSelect = (index, answer) => {
    setSelectedAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = answer;
      return updatedAnswers;
    });
  };

  const handleAnswerSubmit = () => {
    onAnswerSubmit(selectedAnswers);
  };

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      {/* {quizData.map((quiz, index) => {
        return (
          <QuizQuestion
            index={index}
            key={quiz.question}
            quiz={quiz}
            selectedAnswer={selectedAnswers[index]}
            onSelect={(answer) => handleAnswerSelect(index, answer)}
          />
        )
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1.5em auto',
  },
});