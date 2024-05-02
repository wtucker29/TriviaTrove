import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function QuestionCount({ index, question }) {
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}
      >
        <Text
          style={{
            color: '#333',
            fontSize: 15,
            opacity: 0.6,
            marginRight: 2,
          }}
        >
          {index + 1}
        </Text>
        <Text
          style={{
            color: '#333',
            fontSize: 15,
            opacity: 0.6,
          }}
        >
          / 10
        </Text>
      </View>

      <Text
        style={{
          color: '#333',
          fontSize: 18,
          textAlign: 'center',
        }}
      >
        {question}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});