import React, { Component } from 'react';

import { StyleSheet, View, Text, Platform, Alert } from 'react-native';

import { CountDown } from 'react-native-countdown-component';

export default function Count({ path }: { path: string }) {

  onDoneCountdown = () => {

    Alert.alert("Countdown Finish.");

  }

  onPressCountdown = () => {

    Alert.alert("Countdown Component Press.");

  }
    return (
      <View style={styles.MainContainer}>

        <CountDown
          until={600}
          onFinish={this.onDoneCountdown}
          onPress={this.onPressCountdown}
          size={20}
        />

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