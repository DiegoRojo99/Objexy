import { View, Text, StyleSheet, Button } from "react-native";
import { sampleObjectives } from "../../data/sample";
import { ObjectiveList } from "./ObjectiveList";
import ObjectiveInput from "./ObjectiveInput";
import { useState } from "react";

export default function DashboardScreen() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <View style={styles.dashboardContainer}>
      <Text style={styles.dashboardTitle}>Dashboard</Text>
      <ObjectiveInput visible={modalIsVisible} onClose={() => setModalIsVisible(false)} />
      <Button title="Create new objective" onPress={() => setModalIsVisible(true)} />
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
    paddingBottom: 8,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});