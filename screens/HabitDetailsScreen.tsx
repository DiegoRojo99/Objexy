import { View, Text, StyleSheet } from "react-native";
import { sampleHabits } from "../data/sample";
import TagList from "../components/tags/TagList";
import HabitLogStreak from "../components/habits/logs/HabitLogStreak";

export default function HabitDetailsScreen({ route, navigation }: { route: any, navigation: any }) {
  const { habitId } = route.params;
  const habit = sampleHabits.find(h => h.id === habitId);

  return (
    <View style={styles.habitsContainer}>
      {/* <Text style={styles.habitsTitle}>{habit?.name}</Text> */}
      <View style={styles.section}>
        <Text>{habit?.description}</Text>
        <TagList tags={habit?.tagIds || []} />
      </View>
      <View style={styles.section}>
        <HabitLogStreak logs={habit?.logs || []} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  habitsContainer: {
    flex: 1,
    padding: 8,
  },
  habitsTitle: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginTop: 8,
    paddingBottom: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  section: {
    marginVertical: 16,
  },
});