import { FlatList } from "react-native";
import { HabitWithLogs } from "../../lib/types/Habit";
import HabitItem from "./HabitItem";

export function HabitList({ habits }: { habits: HabitWithLogs[] }) {
  return (
    <FlatList
      style={{ paddingTop: 8, marginBottom: 24, flex: 1 }}
      data={habits}
      renderItem={({ item }) => <HabitItem key={item.id} habit={item} />}
      keyExtractor={item => item.id}
    />
  );
}