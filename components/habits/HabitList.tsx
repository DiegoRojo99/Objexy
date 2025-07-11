import { FlatList } from "react-native";
import { Habit } from "../../lib/types/Habit";
import HabitItem from "./HabitItem";

export function HabitList({ habits }: { habits: Habit[] }) {
  return (
    <FlatList
      style={{ paddingTop: 8, marginBottom: 24 }}
      data={habits}
      renderItem={({ item }) => <HabitItem key={item.id} habit={item} />}
      keyExtractor={item => item.id}
    />
  );
}