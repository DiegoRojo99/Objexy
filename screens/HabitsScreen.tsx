import { View, Text, StyleSheet, Button } from "react-native";
import { sampleHabits } from "../data/sample";
import { useState } from "react";
import HabitInputModal from "../components/habits/HabitInputModal";
import { HabitList } from "../components/habits/HabitList";
import { Habit, HabitWithLogs } from "../lib/types/Habit";

export default function HabitsScreen({  }) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [habits, setHabits] = useState<HabitWithLogs[]>(sampleHabits);

  function handleAddHabit(newHabit: Habit) {
    setHabits((prevHabits) => [...prevHabits, { ...newHabit, logs: [] } as HabitWithLogs]);
    setModalIsVisible(false);
  }

  return (
    <View style={styles.habitsContainer}>
      <HabitInputModal visible={modalIsVisible} onClose={() => setModalIsVisible(false)} onAddHabit={handleAddHabit} />
      <Button title="Create new habit" onPress={() => setModalIsVisible(true)} />
      <HabitList habits={habits} />
    </View>
  );
}
  
const styles = StyleSheet.create({
  habitsContainer: {
    flex: 1,
  },
});