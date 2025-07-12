import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HabitsScreen from './screens/HabitsScreen';
import HabitDetailsScreen from './screens/HabitDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GradientBackground } from './components/bg/GradientBackground';
import Colors from './lib/colors/Colors';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const TabScreenOptions = {
    headerShown: false,
    tabBarActiveTintColor: Colors.active,
    tabBarInactiveTintColor: Colors.inactive,
    tabBarStyle: {
      backgroundColor: Colors.tabBackground,
      marginBottom: 0,
    },
  };

  const commonScreenOptions = {
    headerShown: false,
  };

  function HomeScreen() {
    return (
      <GradientBackground>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: Colors.text }}>Home Screen</Text>
        </View>
      </GradientBackground>
    )
  }

  function HabitsStack() {
    return (
      <Stack.Navigator screenOptions={commonScreenOptions}>
        <Stack.Screen 
          name="HabitsList" 
          component={HabitsScreen} 
        />
        <Stack.Screen 
          name="HabitDetails" 
          component={HabitDetailsScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <BottomTabs.Navigator screenOptions={TabScreenOptions}>
          <BottomTabs.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen 
            name="HabitsTab" 
            component={HabitsStack} 
            options={{ 
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="list" size={size} color={color} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}
