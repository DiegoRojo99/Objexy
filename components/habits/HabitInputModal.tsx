import { useState } from "react";
import { Button, TextInput, View, Modal, StyleSheet, Text, Image, Alert } from "react-native";
import { Habit, HabitFrequency, HabitInput } from "../../lib/types/Habit";
import { habitInputIntoHabitDTO } from "../../lib/dto/Habit";

type HabitInputModalProps = {
  visible: boolean;
  onClose: () => void;
  onAddHabit: (habit: Habit) => void;
};

export default function HabitInputModal({ visible, onClose, onAddHabit }: HabitInputModalProps) {
  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");
  const [targetPeriod, setTargetPeriod] = useState<HabitFrequency>("weekly");
  const [targetCount, setTargetCount] = useState<number | null>(null);
  const [tags, setTags] = useState("");

  function handleAddHabit() {
    const newHabitInput: HabitInput = {
      name: habitName,
      description: description,
      targetCount: targetCount ?? 0,
      targetPeriod: targetPeriod,
      tagIds: tags.split(",").map(tag => tag.trim()),
    };

    const newHabit = habitInputIntoHabitDTO(newHabitInput);
    onAddHabit(newHabit);
    onClose();
  }

  function targetCountValidation(count: string | null): void {
    const parsedCount = Number(count);
    if (isNaN(parsedCount) || parsedCount < 0) return;
    setTargetCount(parsedCount);
  }

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose} >
      <View style={styles.modal}>
        <Text style={styles.headerText}>Add New Habit</Text>
        <Image
          source={require('../../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter your habit name"
          style={styles.input}
          value={habitName}
          onChangeText={setHabitName}
        />
        <TextInput
          placeholder="Description"
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          placeholder="Frequency (daily, weekly, monthly)"
          style={styles.input}
          value={targetPeriod}
          onChangeText={text => {
            if (text === "daily" || text === "weekly" || text === "monthly") {
              setTargetPeriod(text as HabitFrequency);
            }
          }}
        />
        <TextInput
          placeholder="Target Count"
          style={styles.input}
          value={targetCount ? targetCount.toString() : ""}
          maxLength={3}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={targetCountValidation}
        />
        <TextInput
          placeholder="Tags (comma separated)"
          style={styles.input}
          value={tags}
          onChangeText={setTags}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Habit" onPress={handleAddHabit} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#eee',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
});