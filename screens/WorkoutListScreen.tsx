import React from 'react';

import { StyleSheet, View, Text } from 'react-native';


export default function WorkoutListScreen({ navigation }) {
  const workouts = require('./../assets/workouts/list.json');
    return (
      <View style={styles.container}>
        {workouts.map((workout: Workout) => (
          <Text key={workout.name}
                style={styles.workout_item}
                onPress={() => navigation.navigate('Workout', { workout: workout })}
                >
            <Text style={styles.name}>{workout.name}</Text>
            <Text style={styles.duration}>
              {workout.duration/60} mins
            </Text>
          </Text>
        ))}
      </View>
    );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  workout_item: {
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
  name: {
    fontSize: 40,
  },
  duration: {
    fontSize: 20
  }

});
