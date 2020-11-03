import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import Timer from '../timer/CountdownTimer';
import workoutOptions from "./TabOneScreen";

export default function WorkoutScreen({ workout }) {
  return (
    <View style={styles.centeredView}>
      <Text style={styles.modalText}>{{ workout.name }} Workout</Text>
      <Timer path="/screens/TabOneScreen.tsx" />
    </View>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalView: {
      justifyContent: "space-around",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding:20,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      textAlign: "center"
    }
  });
