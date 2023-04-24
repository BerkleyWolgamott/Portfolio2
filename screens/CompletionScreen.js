import { StatusBar } from 'expo-status-bar';
import { useCallback, useState} from 'react'
import { Text, View, Button} from 'react-native';
import { StyleSheet} from 'react-native';

export default function CompletionScreen({route, navigation}){

  let {exercise, time} = route.params

  let returnToExercise = useCallback(()=>{
      navigation.push('Exercise', {currentExercise: exercise});
  }) 

  return(
    <View style={styles.container}>
      <Text>Congratulations, You have just completed a{exercise.difficulty == 0 ? "n easy" : (exercise.difficulty == 1 ? " medium" : " hard")} {exercise.name} workout in {String(Math.floor(time/(60*100))).padStart(2,'0')}:{String(Math.floor(time/100)%60).padStart(2,'0')}:{String(Math.floor(time)%100).padStart(2, '0')} {"\n"}</Text>
      <Button onPress={()=>{returnToExercise()}} title={`Return To Exercise`}/>
      <Button onPress={()=>navigation.navigate("Home")} title="Return Home"/>
      <StatusBar style='auto'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});