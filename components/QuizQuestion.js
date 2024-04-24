import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function QuizQuestion({ index, quiz, onSelect }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    const options = shuffle([...quiz.incorrect_answers, quiz.correct_answer]);
    setShuffledOptions(options);
  }, [quiz]);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{quiz.question}</Text>
      <ScrollView style={styles.options}>
        {quiz.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.option}
            onPress={() => handleAnswerSelect(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}