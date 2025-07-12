import { View, Text, StyleSheet } from "react-native";
import { sampleHabits } from "../data/sample";
import TagList from "../components/tags/TagList";
import HabitLogStreak from "../components/habits/logs/HabitLogStreak";
import { GradientBackground } from "../components/bg/GradientBackground";

export default function HabitDetailsScreen({ route, navigation }: { route: any, navigation: any }) {
  const { habitId } = route.params;
  const habit = sampleHabits.find(h => h.id === habitId);

  return (
    <GradientBackground>
      <View style={styles.habitsContainer}>
        {/* Habit Title */}
        <Text style={styles.habitsTitle}>{habit?.name}</Text>

        {/* Habit Details */}
        <View style={styles.section}>
          <Text style={styles.description}>{habit?.description}</Text>
        </View>

        {/* Habit Logs */}
        <View style={styles.section}>
          <HabitLogStreak logs={habit?.logs || []} />
        </View>

        {/* Habit Tags */}
        <View style={styles.section}>
          <TagList tags={habit?.tagIds || []} />
        </View>
      </View>
    </GradientBackground>
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
    color: 'white',
    marginTop: 16,
    paddingBottom: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  section: {
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: 'white',
    marginTop: 8,
  }
});