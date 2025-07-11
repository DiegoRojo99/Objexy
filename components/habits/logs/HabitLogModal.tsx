import { useState } from "react";
import { Button, TextInput, View, Modal, StyleSheet, Text, Image } from "react-native";
import { HabitLog } from "../../../lib/types/Habit";

type HabitInputModalProps = {
  visible: boolean;
  onClose: () => void;
  onAddHabitLog: (habit: HabitLog) => void;
};

export default function HabitLogModal({ visible, onClose, onAddHabitLog }: HabitInputModalProps) {
  const [date, setDate] = useState<Date>(new Date());
  const [notes, setNotes] = useState("");

  function handleAddHabitLog() {
    const newHabitLog: HabitLog = {
      id: Math.random().toString(36).substring(2, 15), // Generate a random ID
      date: date.toISOString().split('T')[0], // Current date in ISO format
      notes: notes.length ? notes : undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onAddHabitLog(newHabitLog);
    onClose();
  }

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose} >
      <View style={styles.modal}>
        <Image
          source={require('../../../assets/images/goal.png')}
          style={styles.image}
        />
        <Text style={styles.headerText}>Add Habit Log</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Select Date"
            style={styles.input}
            value={date.toISOString().split('T')[0]}
            onChangeText={(text) => setDate(new Date(text))}
          />
        </View>
        <TextInput
          placeholder="Notes"
          style={styles.input}
          value={notes}
          onChangeText={setNotes}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Habit Log" onPress={handleAddHabitLog} />
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