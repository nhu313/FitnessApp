import React from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';


export default function WorkoutList({ navigation }) {
  const workouts = require('./../assets/workouts/list.json');

    return (
      <View style={styles.MainContainer}>
        {workouts.map((workout: Workout) => (
          <Text key={workout.name}
                style={styles.ExerciseItem}
                onPress={() => navigation.navigate('Exercise', { workout: workout })}
                >
            <Text style={styles.Name}>{workout.name}</Text>
            <Text style={styles.Duration}>
              {workout.duration/60} mins
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
    borderRadius: 200,
    backgroundColor: '#00aee3',
    color: '#FFFFFF',
    width: 200,
    height: 200,
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 30,
    lineHeight: 220,
    flexDirection: 'column'
  },
  Name: {
    fontSize: 40,
  },
  Duration: {
    fontSize: 20
  }

});
