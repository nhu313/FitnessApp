import React, { useState, useEffect } from "react";
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
  console.log('exercise timer-------------');
  console.log(workout);
  const [key, setKey] = useState(0);
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);
  const [exercise, setExercise] = useState(workout.exercises[index]);

  console.log('exercise timer after setter' + workout.name);
  console.log(workout);

  console.log(index);
  console.log(exercise);


  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log('calling use effect');
  });

  if (exercise) {
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
            setExercise(workout.exercises[index]);
            if (index < workout.exercises.length) {
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
  } else {
    return (
      <Text style={styles.name}>Woo! Great Workout!</Text>
    );
  }



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
