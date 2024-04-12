import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function ProfileTable() {
  return (
    <View>
      <DataTable style={styles.container}>
        <DataTable.Header>
          <DataTable.Title style={styles.header} numeric>Quiz Number</DataTable.Title>
          <DataTable.Title style={styles.header}>Category</DataTable.Title>
          <DataTable.Title style={styles.header}>Difficulty</DataTable.Title>
          <DataTable.Title style={styles.header} numeric>Score</DataTable.Title>
          <DataTable.Title style={styles.header} numeric>Total</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row>
          <DataTable.Cell style={styles.cell} numeric>1</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>Sports</DataTable.Cell>
          <DataTable.Cell style={styles.cell}>Easy</DataTable.Cell>
          <DataTable.Cell style={styles.cell} numeric>3</DataTable.Cell>
          <DataTable.Cell style={styles.cell} numeric>5</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </View>
    // <View>
    //   <DataTable style={styles.container}>
    //     <DataTable.Header>
    //       <DataTable.Title style={styles.header}>QuizNumber</DataTable.Title>
    //       <DataTable.Title style={styles.header}>Category</DataTable.Title>
    //       <DataTable.Title style={styles.header}>Difficulty</DataTable.Title>
    //       <DataTable.Title style={styles.header}>Score</DataTable.Title>
    //       <DataTable.Title style={styles.header}>Total Questions</DataTable.Title>
    //     </DataTable.Header>
    //     <DataTable.Row>
    //       <DataTable.Cell style={styles.cell}>1</DataTable.Cell>
    //       <DataTable.Cell style={styles.cell}>General Knowledge</DataTable.Cell>
    //       <DataTable.Cell style={styles.cell}>Easy</DataTable.Cell>
    //       <DataTable.Cell style={styles.cell}>3</DataTable.Cell>
    //       <DataTable.Cell style={styles.cell}>5</DataTable.Cell>
    //     </DataTable.Row>
    //   </DataTable>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#3c3b3b',
    color: 'ffffff',
  },
  header: {
    color: 'ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cell: {
    color: 'ffffff',
    textAlign: 'center',
  },
});