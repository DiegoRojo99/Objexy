import { SafeAreaView, StyleSheet } from 'react-native';
import HabitScreen from './screens/HabitScreen';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HabitScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingBottom: 12,
    flex: 1,
    paddingHorizontal: 8,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
