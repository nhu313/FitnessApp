import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView
} from "react-native";
import ExerciseTimer from "../timer/ExerciseTimer";

export default function WorkoutScreen({ route }) {
  const workout = route.params.workout;
  const workouts = require(`./../assets/workouts/${workout.}`);

  let currentExercise = workout.exercises[0];

  return (
    <SafeAreaView style={styles.centeredView}>
      <Text style={styles.Title}>{workout.name} Workout</Text>
      <ExerciseTimer exercises={workout.exercises}></ExerciseTimer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    Title: {
      fontSize: 30
    },
  });
