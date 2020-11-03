import React from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';


export default function WorkoutList() {
  const exercises = require('./../assets/workouts/list.json');


    return (
      <View style={styles.MainContainer}>
        {exercises.map(exercise => (
                <Text>{exercise.name}</Text>
              ))}
      </View>
    );
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
