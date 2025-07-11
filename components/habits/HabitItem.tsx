import { View, Text, StyleSheet, Pressable, Image, Button } from "react-native";
import { HabitWithLogs } from "../../lib/types/Habit";
import TagList from "../tags/TagList";
import HabitLogStreak from "./HabitLogStreak";

export default function HabitItem({ habit }: { habit: HabitWithLogs }) {
  function formatFrequency(period: string, count: number): string {
    const uppercasePeriod = period.charAt(0).toUpperCase() + period.slice(1);
    return `Frequency: ${uppercasePeriod} x${count}`;
  }

  return (
    <Pressable style={styles.itemContainer} android_ripple={{ color: '#ddd' }}>
      <View style={styles.topRow}>
        <Image
          source={habit.icon ? { uri: habit.icon } : require('../../assets/images/goal.png')}
          style={{ flex: 0, width: 40, height: 40, borderRadius: 20, marginRight: 8 }}
        />
        <View style={{ flex: 4 }}>
          <Text style={styles.itemName}>{habit.name}</Text>
          <Text style={styles.itemDescription}>{habit.description}</Text>
        </View>
        <View style={{ flex: 0, width: 40, height: 40, alignItems: 'center' }}>
          <Button title="+" onPress={() => {}} />
        </View>
      </View>
      <View>
        <Text style={styles.itemFrequency}>{formatFrequency(habit.targetPeriod, habit.targetCount)}</Text>
        <TagList tags={habit.tagIds} />
      </View>
      <HabitLogStreak logs={habit.logs} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'left',
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'left',
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