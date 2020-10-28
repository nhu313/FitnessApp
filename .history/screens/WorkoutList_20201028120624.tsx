import React from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';


export default function WorkoutList() {
  const customData = require('./../assets/workouts/back.json');
  console.log(customData);
  console.log(customData.title)


    return (
      <View style={styles.MainContainer}>
        <Text>{customData['title']}</Text>

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
