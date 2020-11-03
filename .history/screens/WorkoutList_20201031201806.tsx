import React from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';


export default function WorkoutList() {
  const exercises = require('./../assets/workouts/list.json');


    return (
      <View style={styles.MainContainer}>
        {exercises.map(exercise => (
          <Text key={exercise.name} style={styles.ExerciseItem}>
            <Text style={styles.Name}>{exercise.name}</Text>
            <Text style={styles.Duration}>
              {exercise.duration/60} mins
            </Text>
          </Text>
        ))}
      </View>
    );
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  ExerciseItem: {
    borderRadius: 250,
    backgroundColor: '#00aee3',
    color: '#FFFFFF',
    width: 250,
    height: 250,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 30,
    lineHeight: 220,
    flex: 1,
    flexDirection: 'column'
  },
  Name: {
    fontSize: 40,
  },
  Duration: {
    fontSize: 20
  }

});
