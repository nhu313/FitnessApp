import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExerciseTimer from "../timer/ExerciseTimer";

export default function WorkoutScreen({ route, navigation }) {
  const file_name = route.params.workout.file_name;
  const workout = require(`./../assets/workouts/${file_name}`);
  return (
    <View style={styles.centeredView}>
      <Text style={styles.title}>{workout.name} Workout</Text>
      <ExerciseTimer exercises={workout.exercises}></ExerciseTimer>
      <Text style={styles.link} onPress={() => navigation.navigate('WorkoutList')}>
        Exercise List
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    title: {
      fontSize: 30
    },
    link: {
      color: '#00aee3',
      paddingTop: 20
    }
  });
