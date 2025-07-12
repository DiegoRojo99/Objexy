import { FlatList } from "react-native";
import { HabitWithLogs } from "../../lib/types/Habit";
import HabitItem from "./HabitItem";
import { StyleSheet } from "react-native";

export function HabitList({ habits }: { habits: HabitWithLogs[] }) {
  return (
    <FlatList
      style={styles.habitListContainer}
      data={habits}
      renderItem={({ item }) => <HabitItem key={item.id} habit={item} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  habitListContainer: {
    flex: 1,
    paddingHorizontal: 4,
    paddingTop: 8,
    marginVertical: 8,
  },
});