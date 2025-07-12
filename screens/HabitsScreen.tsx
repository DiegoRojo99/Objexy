import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { sampleHabits } from "../data/sample";
import { useState } from "react";
import HabitInputModal from "../components/habits/HabitInputModal";
import { HabitList } from "../components/habits/HabitList";
import { Habit, HabitWithLogs } from "../lib/types/Habit";
import { GradientBackground } from "../components/bg/GradientBackground";
import Entypo from '@expo/vector-icons/Entypo';
import Colors from "../lib/colors/Colors";

export default function HabitsScreen({  }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [habits, setHabits] = useState<HabitWithLogs[]>(sampleHabits);

  function handleAddHabit(newHabit: Habit) {
    setHabits((prevHabits) => [...prevHabits, { ...newHabit, logs: [] } as HabitWithLogs]);
    setModalIsVisible(false);
  }

  return (
    <GradientBackground>
      <View style={styles.habitsContainer}>
        {/* Habit Input Modal */}
        <HabitInputModal visible={modalIsVisible} onClose={() => setModalIsVisible(false)} onAddHabit={handleAddHabit} />

        {/* Header */}
        <View style={styles.topRow}>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Habit Tracker</Text>
          </View>
          {/* Create Habit Button */}
          <Pressable style={styles.button} onPress={() => setModalIsVisible(true)}>
            <Entypo name="add-to-list" size={32} color="white" />
          </Pressable>
        </View>

        {/* Habit List */}
        <HabitList habits={habits} />
      </View>
    </GradientBackground>
  );
}
  
const styles = StyleSheet.create({
  habitsContainer: {
    flex: 1,
    padding: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 8,
  },
  logoContainer: {
    flexDirection: 'row',
  },
  logoText: {
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  button: {
    // padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
});