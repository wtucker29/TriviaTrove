import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

export default function QuizOptions({ handleQuizStart }) {

  const [quizOptions, setQuizOptions] = useState({
    amount: 10, // Default question amount
    category: '', // Default category
    difficulty: '', // Default difficulty
    type: '', // Default type
  });

  const [catOpen, setCatOpen] = useState(false);
  const [catValue, setCatValue] = useState(null);
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const [difficultyValue, setDifficultyValue] = useState(null);
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);

  const [categoryItems, setCategoryItems] = useState([
    { label: "Any Category", value: "" },
    { label:"General Knowledge", value: "9" },
    { label: "Books", value: "10" },
    { label: "Film", value: "11" },
    { label: "Music", value: "12" },
    { label: "Musicals and Theatres", value: "13" },
    { label: "Television", value: "14" },
    { label: "Video Games", value: "15" },
    { label: "Board Games", value: "16" },
    { label: "Science and Nature", value: "17" },
    { label: "Computers", value: "18" },
    { label: "Mathematics", value: "19" },
    { label: "Mythology", value: "20" },
    { label: "Sports", value: "21" },
    { label: "Geography", value: "22" },
    { label: "History", value: "23" },
    { label: "Politics", value: "24" },
    { label: "Art", value: "25" },
    { label: "Celebrities", value: "26" },
    { label: "Animals", value: "27" },
    { label: "Vehicles", value: "28" },
    { label: "Comics", value: "29" },
    { label: "Gadgets", value: "30" },
    { label: "Japanese Anime and Manga", value: "31" },
    { label: "Cartoon and Animations", value: "32" }
  ]);

  const [difficultyItems, setDifficultyItems] = useState([
    { label: "Any Difficulty", value: "" },
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" }
  ]);

  const [typeItems, setTypeItems] = useState([
    { label: "Any Type", value: "" },
    { label: "Multiple Choice", value: "multiple" },
    { label: "True / False", value: "boolean" }
  ]);

  const onQuizSelect = (e) => {
    e.preventDefault();
    handleQuizStart(quizOptions);
    console.log('Quiz Options:', quizOptions);

    setQuizOptions({
      amount: 10,
      category: '',
      difficulty: '',
      type: '',
    });
  };

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.heading}>Number of Questions (Max 50):</Text>
        <TextInput
          style={styles.input}
          value={quizOptions.amount}
          onChangeText={(text) => setQuizOptions({ ...quizOptions, amount: text })}
          keyboardType="numeric"
          maxLength={2}
          returnKeyType="done"
        />
      </>
      <>
        <Text style={styles.heading}>Category:</Text>
        <DropDownPicker
          open={catOpen}
          items={categoryItems}
          value={catValue}
          setOpen={setCatOpen}
          setValue={setCatValue}
          setItems={setCategoryItems}
          containerProps={{
            style: {
              zIndex: catOpen ? 300 : null,
              zIndexInverse: catOpen ? 100 : null,
            }
          }}
          style={{ backgroundColor: '#ffffff', color: 'black', padding: 10, borderRadius: 5, width: 300 }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#ffffff' }}
          dropDownContainerStyle={{ width: 300}}
          onChangeItem={(item) => setQuizOptions({ ...quizOptions, category: item.value })}
        />
      </>
      <>
        <Text style={styles.heading}>Difficulty:</Text>
        <DropDownPicker
          open={difficultyOpen}
          items={difficultyItems}
          value={difficultyValue}
          setOpen={setDifficultyOpen}
          setValue={setDifficultyValue}
          setItems={setDifficultyItems}
          containerProps={{
            style: {
              zIndex: difficultyOpen ? 300 : null,
              zIndexInverse: difficultyOpen ? 100 : null,
            }
          }}
          style={{ backgroundColor: '#ffffff', color: 'black', padding: 10, borderRadius: 5, width: 300 }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#ffffff' }}
          dropDownContainerStyle={{ width: 300}}
          onChangeItem={(item) => setQuizOptions({ ...quizOptions, difficulty: item.value })}
        />
      </>
      <>
        <Text style={styles.heading}>Type:</Text>
        <DropDownPicker
          open={typeOpen}
          items={typeItems}
          value={typeValue}
          setOpen={setTypeOpen}
          setValue={setTypeValue}
          setItems={setTypeItems}
          containerProps={{
            style: {
              zIndex: typeOpen ? 300 : null,
              zIndexInverse: typeOpen ? 100 : null,
            }
          }}
          style={{ backgroundColor: '#ffffff', color: 'black', padding: 10, borderRadius: 5, width: 300 }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#ffffff' }}
          dropDownContainerStyle={{ width: 300}}
          onChangeItem={(item) => setQuizOptions({ ...quizOptions, type: item.value })}
        />
      </>
      <TouchableOpacity onPress={onQuizSelect} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#272724',
  },
  optionsText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 20,
  },
  formGroup: {
    marginVertical: 10,
    color: '#ffffff',
  },
  heading: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    color: 'black',
    padding: 10,
    borderRadius: 5,
    width: 300,
  },
  picker: {
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
    borderRadius: 5,
    width: 300,
  },
  button: {
    backgroundColor: '#efd356',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

        {/* <Picker
          style={styles.picker}
          selectedValue={quizOptions.category}
          onValueChange={(itemValue) => setQuizOptions({ ...quizOptions, category: itemValue })}
        >
          <Picker.Item label="Any Category" value="" />
          <Picker.Item label="General Knowledge" value="9" />
          <Picker.Item label="Books" value="10" />
          <Picker.Item label="Film" value="11" />
          <Picker.Item label="Music" value="12" />
          <Picker.Item label="Musicals and Theatres" value="13" />
          <Picker.Item label="Television" value="14" />
          <Picker.Item label="Video Games" value="15" />
          <Picker.Item label="Board Games" value="16" />
          <Picker.Item label="Science and Nature" value="17" />
          <Picker.Item label="Computers" value="18" />
          <Picker.Item label="Mathematics" value="19" />
          <Picker.Item label="Mythology" value="20" />
          <Picker.Item label="Sports" value="21" />
          <Picker.Item label="Geography" value="22" />
          <Picker.Item label="History" value="23" />
          <Picker.Item label="Politics" value="24" />
          <Picker.Item label="Art" value="25" />
          <Picker.Item label="Celebrities" value="26" />
          <Picker.Item label="Animals" value="27" />
          <Picker.Item label="Vehicles" value="28" />
          <Picker.Item label="Comics" value="29" />
          <Picker.Item label="Gadgets" value="30" />
          <Picker.Item label="Japanese Anime and Manga" value="31" />
          <Picker.Item label="Cartoon and Animations" value="32" />
        </Picker> */}

                {/* <Picker
          style={styles.picker}
          selectedValue={quizOptions.difficulty}
          onValueChange={(itemValue) => setQuizOptions({ ...quizOptions, difficulty: itemValue })}
        >
          <Picker.Item label="Any Difficulty" value="" />
          <Picker.Item label="Easy" value="easy" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Hard" value="hard" />
        </Picker> */}

                {/* <Picker
          style={styles.picker}
          selectedValue={quizOptions.type}
          onValueChange={(itemValue) => setQuizOptions({ ...quizOptions, type: itemValue })}
        >
          <Picker.Item label="Any Type" value="" />
          <Picker.Item label="Multiple Choice" value="multiple" />
          <Picker.Item label="True / False" value="boolean" />
        </Picker> */}