import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HabitsScreen from './screens/HabitsScreen';
import HabitDetailsScreen from './screens/HabitDetailsScreen';
import Colors from './lib/colors/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
  useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const commonScreenOptions = {
    headerTitleStyle: { fontFamily: 'Roboto-Bold' },
    headerStyle: { backgroundColor: Colors.navigation },
    headerTintColor: Colors.navigationText,
  };

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={commonScreenOptions}>
          <Stack.Screen 
            name="Habits" 
            component={HabitsScreen} 
            options={{ 
              headerTitle: 'My Habits'
            }}
          />
          <Stack.Screen 
            name="Habit Details" 
            component={HabitDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
