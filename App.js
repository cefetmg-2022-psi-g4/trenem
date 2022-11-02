import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
export default function App() {
  return (
    <NavigationContainer>
          <StatusBar backgroundColor="#1d1d2e" barStyle="light-content" translucent={false} />
          <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
