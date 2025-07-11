import { View, Text, StyleSheet, Button } from "react-native";
import { sampleHabits } from "../data/sample";
import { useState } from "react";
import HabitInputModal from "../components/habits/HabitInputModal";
import { HabitList } from "../components/habits/HabitList";
import { Habit, HabitWithLogs } from "../lib/types/Habit";

export default function HabitScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [habits, setHabits] = useState<HabitWithLogs[]>(sampleHabits);

  function handleAddHabit(newHabit: Habit) {
    setHabits((prevHabits) => [...prevHabits, { ...newHabit, logs: [] } as HabitWithLogs]);
    setModalIsVisible(false);
  }

  return (
    <View style={styles.habitsContainer}>
      <Text style={styles.habitsTitle}>Habits</Text>
      <HabitInputModal visible={modalIsVisible} onClose={() => setModalIsVisible(false)} onAddHabit={handleAddHabit} />
      <Button title="Create new habit" onPress={() => setModalIsVisible(true)} />
      <HabitList habits={habits} />
    </View>
  );
}

const styles = StyleSheet.create({
  habitsContainer: {
    width: '100%',
    height: '100%',
    margin: 8,
  },
  habitsTitle: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginTop: 8,
    paddingBottom: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});