import { SafeAreaView, StyleSheet } from 'react-native';
import HabitScreen from './components/habits/HabitScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HabitScreen />
    </SafeAreaView>
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
