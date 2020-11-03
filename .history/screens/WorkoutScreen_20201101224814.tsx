import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import ExerciseTimer from "../timer/ExerciseTimer";

export default function WorkoutScreen({ route, navigation }) {
  const [fileName, setFileName] = useState(null);
  const [workout, setWorkout] = useState(null);

  const file_name = route.params.workout.file_name;
  console.log(file_name);

  const workout = require(`./../assets/workouts/${file_name}`);
  setWorkout(workout);
  return (
    <View style={styles.centeredView}>
      <Text style={styles.title}>{workout.name} Workout</Text>
      <ExerciseTimer workout={workout}></ExerciseTimer>
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