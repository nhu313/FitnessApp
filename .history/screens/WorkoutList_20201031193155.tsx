import React from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';


export default function WorkoutList() {
  const exercises = require('./../assets/workouts/list.json');


    return (
      <View style={styles.MainContainer}>
        {exercises.map(exercise => (
                <Text key={exercise.name} style={styles.ExerciseItem}>{exercise.name}</Text>
              ))}
      </View>
    );
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ExerciseItem: {
    fontSize: 40,
    borderRadius: 50,
    backgroundColor: '#00b4eb',
    color: '#FFFFFF',
    width: 250,
    height: 250,
    textAlign: 'center',
    flex: 1,

  }

});
