import { View, Text, StyleSheet } from "react-native";

export default function TagList({ tags }: { tags: string[] | undefined }) {
  return (
    <View style={styles.tagListContainer}>
      {tags?.length ? tags?.map((tag, index) => (
        <Text key={index} style={styles.tagItem}>
          {tag}
        </Text>
      )) : (
        <Text style={styles.noTagsText}>No tags available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  noTagsText: {
    color: "#999",
    fontStyle: "italic",
  },
  tagListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
  tagItem: {
    backgroundColor: "#eee",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 4,
  },
});