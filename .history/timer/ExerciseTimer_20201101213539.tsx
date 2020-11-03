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

export default function ExerciseTimer({exercises}) {
  let index = 0;
  let currentExercise = exercises[index];
  let rest = false;
  return (
    //   Have countdown to match the specified time
    <View style={styles.container}>
      <Text style={styles.name}>{currentExercise.name}</Text>
      <CountdownCircleTimer
        key={currentExercise.name}
        duration={currentExercise.duration}
        isPlaying
        onComplete={() => {
          currentExercise = exercises[index++];
          console.log(currentExercise);
            return [true, 15000]; // repeat animation in 15 seconds
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
        onPress={() => }
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
