import { FlatList } from "react-native";
import { Habit } from "../../lib/types/Habit";
import HabitItem from "./HabitItem";

export function HabitList({ habits }: { habits: Habit[] }) {
  return (
    <FlatList
      data={habits}
      renderItem={({ item }) => <HabitItem key={item.id} habit={item} />}
      keyExtractor={item => item.id}
    />
  );
}