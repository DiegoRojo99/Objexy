import { View, Text, StyleSheet, Pressable, Image, Button } from "react-native";
import { HabitLog, HabitWithLogs } from "../../lib/types/Habit";
import TagList from "../tags/TagList";
import HabitLogStreak from "./logs/HabitLogStreak";
import HabitLogModal from "./logs/HabitLogModal";
import { useState } from "react";
import { Foundation, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Colors from "../../lib/colors/Colors";
import { RootStackParamList } from "../../lib/types/Params";

export default function HabitItem({ habit }: { habit: HabitWithLogs }) {
  const [habitLogs, setHabitLogs] = useState(habit.logs);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function formatFrequency(period: string, count: number): string {
    const uppercasePeriod = period.charAt(0).toUpperCase() + period.slice(1);
    return `Frequency: ${uppercasePeriod} x${count}`;
  }

  function handleAddHabitLog() {
    const now = new Date().toISOString();
    const habitLog: HabitLog = {
      id: Math.random().toString(36).substring(2, 15),
      date: now.split('T')[0],
      createdAt: now,
      updatedAt: now,
    };
    setHabitLogs(prevLogs => [ ...prevLogs, habitLog ]);
  }

  function handlePress() {
    navigation.navigate('HabitDetails', { habitId: habit.id });
  }

  return (
    <Pressable style={styles.itemContainer} android_ripple={{ color: Colors.ripple }} onPress={handlePress}>
      {/* Top Row */}
      <View style={styles.topRow}>
        {/* Icon */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Foundation name="target" size={40} color="black" />
        </View>
        
        {/* Habit Name and Description */}
        <View style={{ flex: 8, paddingHorizontal: 8 }}>
          <Text style={styles.itemName}>{habit.name}</Text>
          <Text style={styles.itemDescription}>
            {habit.description?.substring(0, 35)}
            {habit.description && habit.description.length > 35 && '...'}
          </Text>
        </View>

        {/* Add Button */}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Pressable style={styles.addButton} onPress={() => handleAddHabitLog()}>
            <MaterialIcons name="add-task" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Streak */}      
      <HabitLogStreak logs={habitLogs} />

      {/* Tags */}
      <View>
        <TagList tags={habit.tagIds} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    padding: 8,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    display: 'flex',
    flexDirection: 'column',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  addButton: {
    padding: 4,
    backgroundColor: Colors.accent,
    borderRadius: 8,
  },
  itemName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textAlign: 'left',
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'left',
  },
  itemFrequency: {
    marginVertical: 5,
  },
  itemCount: {
    marginVertical: 5,
  },
  itemTags: {
    marginVertical: 5,
  },
});