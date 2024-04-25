import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

export default function ProgressBar({ progress }) {
  const allQuestions = 10;

  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions],
    outputRange: ['0%', '100%'],
  });
  return (
    <View style={styles.progressBarContainer}>
      <Animated.View
        style={[
          {
            height: 5,
            borderRadius: 5,
            backgroundColor: '#ff9f1c' + '90',
          },
          {
            width: progressAnim,
          },
        ]}
        ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "80%",
    height: 5,
    borderRadius: 5,
    backgroundColor: "#00000020",
    marginBottom: 10,
  },
});