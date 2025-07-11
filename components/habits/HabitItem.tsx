import { View, Text, StyleSheet, Pressable } from "react-native";
import { Habit } from "../../lib/types/Habit";
import TagList from "../tags/TagList";

export default function HabitItem({ habit }: { habit: Habit }) {
  function formatFrequency(period: string, count: number): string {
    const uppercasePeriod = period.charAt(0).toUpperCase() + period.slice(1);
    return `Frequency: ${uppercasePeriod} x${count}`;
  }

  return (
    <Pressable style={styles.itemContainer} android_ripple={{ color: '#ddd' }}>
      <View>
        <Text style={styles.itemName}>{habit.name}</Text>
        <Text style={styles.itemDescription}>{habit.description}</Text>
        <Text style={styles.itemFrequency}>{formatFrequency(habit.targetPeriod, habit.targetCount)}</Text>
        <TagList tags={habit.tagIds} />
      </View>
    </Pressable>
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