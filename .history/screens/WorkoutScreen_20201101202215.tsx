import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Timer from '../timer/Timer';
import { FlatList } from 'react-native';

export default function WorkoutScreen({ route }) {
  const workout = route.params.workout;

  const renderItem = ({ exercise }) => (
    <Item title={exercise.name} />
  );

  return (
    <View style={styles.centeredView}>
      <Text style={styles.Title}>{workout.name} Workout</Text>
      <FlatList
        data={workout.exercises}
        renderItem={Timer}
        keyExtractor={(exercise: Exercise) => exercise.name}
      />
      <Timer />
    </View>
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
