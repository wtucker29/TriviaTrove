import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(0);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const storedScore = await AsyncStorage.getItem('score');
        const storedTotalQuestions = await AsyncStorage.getItem('totalQuestions');
        if(storedScore !== null && storedTotalQuestions !== null) {
          setScore(parseInt(storedScore, 10));
          setQuestions(parseInt(storedTotalQuestions, 10));
        }
      } catch {
        console.error('Error loading profile data: ', error);
      }
    };
    loadProfileData();
  }, []);

  const updateProfileData = async (incrementScore, incrementQuestions) => {
    try {
      const newScore = score + incrementScore;
      const newQuestions = questions + incrementQuestions;
      setScore(newScore);
      setQuestions(newQuestions);
      await AsyncStorage.setItem('score', newScore.toString());
      await AsyncStorage.setItem('totalQuestions', newQuestions.toString());
    } catch {
      console.error('Error updating profile data: ', error);
    }
  };

  return (
    <ProfileContext.Provider value={{ score, questions, updateProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
}

export const useProfile = () => {
  useContext(ProfileContext);
};