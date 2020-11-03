import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return (
      <Text style={styles.timer}>Woo! Great Workout!</Text>
    )
  }
  if (remainingTime === 10) {
    return (
      <Text style={styles.timer}>Almost There..!</Text>
    )
  }
  return (
    <View style={styles.timer}>
      <Text style={styles.text}>Remaining</Text>
      <Text style={styles.value}>{remainingTime}</Text>
      <Text style={styles.text}>seconds</Text>
    </View>
  );
};

export default function ExerciseTimer({workout}) {
  let play = true;
  const [key, setKey] = useState(0);
  const [index, setIndex] = useState(0);
  let currentExercise = workout.exercises[index];
  const [exercise, setExercise] = useState(currentExercise);
  console.log(workout);
  console.log('exercise timer');
  console.log(currentExercise);
  return (
    //   Have countdown to match the specified time
    <View style={styles.container}>
      <Text style={styles.name}>{exercise.name}</Text>
      <CountdownCircleTimer
        key={key}
        duration={exercise.duration}
        isPlaying = {play}
        onComplete={() => {
          setIndex(index + 1);
          console.log(index);
          console.log(workout.exercises.length);
          if (index < workout.exercises.length) {
            setExercise(workout.exercises[index]);
            setKey(prevKey => prevKey + 1);
          } else {
            console.log(' what is index' + index);
            return [false, 15000];
          }
        }}
        colors={[
            ['#004777', 0.40],
            ['#F7B801', 0.40],
            ['#73cd32', 0.20]
        ]}>
        {renderTime}
      </CountdownCircleTimer>
      <Button
        title="Reset Exercise"
        onPress={() => setKey(prevKey => prevKey + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 50,
    paddingBottom: 10
  },
  remainingTime: {
    fontSize: 46,
  },
  timer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#333',
  },
  value: {
    fontSize: 40,
  },


});
