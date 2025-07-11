import { SafeAreaView, StyleSheet } from 'react-native';
import HabitScreen from './components/habits/HabitScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './lib/colors/Colors';
import { useFonts } from 'expo-font';

export default function App() {
  
  useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  return (
    <LinearGradient colors={[Colors.primary, Colors.secondary]} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <HabitScreen />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    paddingHorizontal: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
