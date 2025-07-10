import { View, Text, StyleSheet } from "react-native";
import { sampleObjectives } from "../../data/sample";
import { ObjectiveList } from "./ObjectiveList";

export default function DashboardScreen() {
  return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.dashboardTitle}>Dashboard</Text>
      <ObjectiveList objectives={sampleObjectives} />
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});