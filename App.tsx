import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HabitsScreen from './screens/HabitsScreen';
import HabitDetailsScreen from './screens/HabitDetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  const TabScreenOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#6200ee',
    tabBarInactiveTintColor: '#999',
    tabBarStyle: {
      backgroundColor: '#fff',
      borderTopWidth: 1,
      elevation: 0,
      marginBottom: 0,
    },
  };

  const commonScreenOptions = {
    headerShown: false,
    contentStyle: {
      paddingTop: 32,
      paddingHorizontal: 8,
      flex: 1,
    },
  };

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
      </View>
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
