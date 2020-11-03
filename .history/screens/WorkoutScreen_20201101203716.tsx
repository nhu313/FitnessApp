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
  const file_name = route.params.workout.file_name;
  const workout = require(`./../assets/workouts/${file_name}`);
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
