import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import React from 'react';

export const GradientBackground: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <LinearGradient
    colors={['#155854', '#0C3026']}
    style={styles.gradient}
  >
    {children}
  </LinearGradient>
);

const styles = StyleSheet.create({
  gradient: {
    paddingTop: 32,
    paddingHorizontal: 8,
    flex: 1,
    color: 'white'
  },
});
