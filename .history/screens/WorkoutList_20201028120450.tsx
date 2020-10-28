import React from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';


export default function WorkoutList() {
  const customData = require('/assets/workouts/back.json');
  console.log(customData);


    return (
      <View style={styles.MainContainer}>
        <Text>yo!!!</Text>

      </View>
    );
}
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
