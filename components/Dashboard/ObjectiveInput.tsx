import { useState } from "react";
import { Button, TextInput, View, Modal, StyleSheet, Text, Image } from "react-native";

export default function ObjectiveInput({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const [objective, setObjective] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("");
  const [tags, setTags] = useState("");

  function handleAddObjective() {
    const newObjective = {
      title: objective,
      description: description,
      frequency: frequency,
      tags: tags.split(",").map(tag => tag.trim()),
    };
    
    console.log("Objective added:", newObjective);
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
          placeholder="Enter your objective"
          style={styles.input}
          value={objective}
          onChangeText={setObjective}
        />
        <TextInput
          placeholder="Description"
          style={styles.input}
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          placeholder="Frequency"
          style={styles.input}
          value={frequency}
          onChangeText={setFrequency}
        />
        <TextInput
          placeholder="Tags (comma separated)"
          style={styles.input}
          value={tags}
          onChangeText={setTags}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Objective" onPress={handleAddObjective} />
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