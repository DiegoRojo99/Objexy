import { FlatList } from "react-native";
import { Objective } from "./lib/types/Objective";
import { ObjectiveProgress } from "./ObjectiveProgress";

export function ObjectiveList({ objectives }: { objectives: Objective[] }) {
  return (
    <FlatList
      data={objectives}
      renderItem={({ item }) => <ObjectiveProgress key={item.id} objective={item} />}
      keyExtractor={item => item.id}
    />
  );
}