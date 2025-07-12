import { View, Text, StyleSheet } from "react-native";
import Colors from "../../lib/colors/Colors";

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
    marginVertical: 4,
  },
  tagItem: {
    backgroundColor: Colors.accent,
    color: Colors.text,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
});