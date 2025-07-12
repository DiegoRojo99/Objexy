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
  const [modalVisible, setModalVisible] = useState(false);
  const [habitLogs, setHabitLogs] = useState(habit.logs);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function formatFrequency(period: string, count: number): string {
    const uppercasePeriod = period.charAt(0).toUpperCase() + period.slice(1);
    return `Frequency: ${uppercasePeriod} x${count}`;
  }

  function handleAddHabitLog(habitLog: HabitLog) {
    setHabitLogs(prevLogs => [ ...prevLogs, habitLog ]);
  }

  function handlePress() {
    navigation.navigate('HabitDetails', { habitId: habit.id });
  }

  return (
    <>
    <HabitLogModal visible={modalVisible} onClose={() => setModalVisible(false)} onAddHabitLog={handleAddHabitLog} />
    <Pressable style={styles.itemContainer} android_ripple={{ color: Colors.ripple }} onPress={handlePress}>
      <View style={styles.topRow}>
        <Foundation name="target" size={40} color="black" style={{ marginRight: 8 }} />
        <View style={{ flex: 4 }}>
          <Text style={styles.itemName}>{habit.name}</Text>
          <Text style={styles.itemDescription}>{habit.description}</Text>
        </View>
        <View style={styles.addButton}>
          <Pressable onPress={() => setModalVisible(true)}>
            <MaterialIcons name="add-task" size={24} color="white" />
          </Pressable>
        </View>
      </View>
      <View>
        <Text style={styles.itemFrequency}>{formatFrequency(habit.targetPeriod, habit.targetCount)}</Text>
        <TagList tags={habit.tagIds} />
      </View>
      <HabitLogStreak logs={habitLogs} />
    </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    padding: 12,
    backgroundColor: Colors.cardBackground,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  addButton: {
    padding: 8,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
  },
  itemName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 12,
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