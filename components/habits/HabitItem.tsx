import { View, Text, StyleSheet } from "react-native";
import { Habit } from "../../lib/types/Habit";

export default function HabitItem({ habit }: { habit: Habit }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{habit.name}</Text>
      <Text style={styles.itemDescription}>{habit.description}</Text>
      <Text style={styles.itemFrequency}>Frequency: {habit.targetPeriod}</Text>
      <Text style={styles.itemCount}>Target Count: {habit.targetCount}</Text>
      <Text style={styles.itemTags}>Tags: {habit.tagIds?.join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 8,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  itemDescription: {
    marginVertical: 5,
  },
  itemFrequency: {
    marginVertical: 5,
  },
  itemCount: {
    marginVertical: 5,
  },
  itemTags: {
    marginVertical: 5,
  },
});