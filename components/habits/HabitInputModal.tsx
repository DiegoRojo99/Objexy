import { useState } from "react";
import { Button, TextInput, View, Modal, StyleSheet, Text, Image } from "react-native";
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
  const [targetCount, setTargetCount] = useState<number>(0);
  const [tags, setTags] = useState("");

  function handleAddHabit() {
    const newHabitInput: HabitInput = {
      name: habitName,
      description: description,
      targetCount: targetCount,
      targetPeriod: targetPeriod,
      tagIds: tags.split(",").map(tag => tag.trim()),
    };

    const newHabit = habitInputIntoHabitDTO(newHabitInput);
    onAddHabit(newHabit);
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose} >
      <View style={styles.modal}>
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
          value={String(targetCount)}
          onChangeText={text => {
            const value = parseInt(text);
            if (!isNaN(value)) {
              setTargetCount(value);
            }
          }}
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
    fontWeight: 'bold',
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