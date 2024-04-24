import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>QuizWhiz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 100,
  },
  title: {
    fontSize: 50,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});