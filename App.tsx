import { StyleSheet, View } from 'react-native';
import HabitScreen from './components/habits/HabitScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HabitScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
