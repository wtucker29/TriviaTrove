import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Results({ navigation, route }) {
  const { score, totalQuestions } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{ fontSize: 50, color: 'white' }}>Your Score</Text>
        <View style={styles.textWrapper}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.totalQuestions}>/{totalQuestions}</Text>
        </View>
        {/** Add a button to navigate to the Home screen */}
        <TouchableOpacity
          title="Home"
          onPress={() => navigation.navigate('Home')}
          accessabilityLabel="Click to return to home page"
          style={styles.btn}
        >
          <Text style={styles.btnText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272724",
    alignItem: "center",
    justifyContent: "center",
  },
  subContainer: {
    width: "90",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 30,
  },
  score: {
    fontSize: 100,
    color: "#ffffff",
  },
  totalQuestions: {
    fontSize: 100,
    color: "#ffffff",
  },
  btn: {
    backgroundColor: "#efd356",
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: "relative",
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    letterSpacing: 1.1,
  },
});