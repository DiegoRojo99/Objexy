import { Text, View, StyleSheet } from "react-native";
import { HabitLog } from "../../../lib/types/Habit";

export default function HabitLogStreak({ logs }: { logs: HabitLog[] }) {
  function checkPreviousDay(date1: string, date2: string): boolean {
    const currDate = new Date(date1);
    const prevDate = new Date(date2);

    if (isNaN(prevDate.getTime()) || isNaN(currDate.getTime())) return false;
    // Set the time to midnight for both dates
    prevDate.setHours(0, 0, 0, 0);
    currDate.setHours(0, 0, 0, 0);

    // Check if the previous date is exactly one day before the current date
    return prevDate.getTime() === currDate.getTime() - 86400000;
  }

  const calculateStreak = (logs: HabitLog[]): number => {
    // If no logs, return 0
    if (logs.length === 0) return 0;

    // Sort logs by date in descending order
    logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    let streak = 0;
    for (let i = 0; i < logs.length; i++) {
      // Check if the current log is the first one
      if (i === 0) streak++;
      // Check if the current log is consecutive with the previous one
      else if (checkPreviousDay(logs[i - 1].date, logs[i].date)) {
        streak++;
      }
      // If not consecutive, break the loop
      else break;
    }
    return streak;
  };

  const streak = calculateStreak(logs);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Streak</Text>
      <Text style={styles.streakCount}>{streak} days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginVertical: 8,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
  },
  streakCount: {
    fontSize: 14,
    color: '#666',
  },
});
