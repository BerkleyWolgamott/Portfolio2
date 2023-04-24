import {NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { StyleSheet} from 'react-native';
import HomeScreen from "./screens/HomeScreen.js"
import ExerciseScreen from "./screens/ExerciseScreen.js"
import CompletionScreen from "./screens/CompletionScreen.js"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Exercise" component={ExerciseScreen}/>
        <Stack.Screen name="Complete" component={CompletionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


