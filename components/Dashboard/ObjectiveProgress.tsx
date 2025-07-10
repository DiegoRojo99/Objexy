import { View, Text, StyleSheet, Pressable } from "react-native";
import { Objective, Tag } from "../../lib/types/Objective";

export function ObjectiveProgress({ objective }: { objective: Objective }) {
  return (
    <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => [styles.objectiveContainer, pressed && { backgroundColor: '#f0f0f0' }]}>
      <View style={styles.objectiveContainer}>
        <Text style={styles.objectiveTitle}>{objective.title}</Text>
        <Text style={styles.objectiveText}>{objective.description}</Text>
        <Text style={styles.objectiveText}>Frequency: {objective.frequencyNumber}x {objective.frequency}</Text>
        <Text style={styles.objectiveText}>Tags:</Text>
        <View style={tagStyles.tagContainer}>
          {objective.tags.map(tag => (
            <TagItem key={tag.id} tag={tag} />
          ))}
        </View>
      </View>
    </Pressable>
  );
}

function TagItem({ tag }: { tag: Tag}) {
  return (
    <View style={tagStyles.tagContainer}>
      <Text style={tagStyles.tagText}>{tag.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  objectiveContainer: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginVertical: 8,
  },
  objectiveTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  objectiveText: {
    marginVertical: 5,
  },
});

const tagStyles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  tagText: {
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    padding: 4,
  },
});