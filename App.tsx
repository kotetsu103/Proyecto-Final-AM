import 'react-native-gesture-handler';
import React from 'react'
//import { LoginScreen } from './src/screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      <StackNavigator />
    </NavigationContainer>
  )
}

export default App;
