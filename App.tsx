import { StyleSheet, View } from 'react-native';
import DashboardScreen from './components/Dashboard/DashboardScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <DashboardScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
