import { StatusBar } from 'expo-status-bar';
import { useCallback, useState, useEffect} from 'react'
import { Text, View, Button} from 'react-native';
import { StyleSheet} from 'react-native';

let timer = 0

export default function ExerciseScreen({route, navigation}){

  let {currentExercise} = route.params
  let [currentTime, setCurrentTime] = useState(0)
  useEffect(()=>{
      clearInterval(timer)
      setCurrentTime(0)
      setInterval(()=>setCurrentTime(prev => prev+1), 1)
      return () => clearInterval(timer)
    }, [setCurrentTime]
  )

  let goToCompletion = useCallback(()=>{
    clearInterval(timer)
    navigation.navigate('Complete', {exercise: currentExercise, time: currentTime});
  }) 

  return(
    <View style={styles.container}>
      <Text>Your Workout has Begun, Goodluck!{"\n"}</Text>
      <Text>{currentExercise.name} Timer {String(Math.floor(currentTime/(60*100))).padStart(2,'0')}:{String(Math.floor(currentTime/100)%60).padStart(2,'0')}:{String(Math.floor(currentTime)%100).padStart(2, '0')} </Text>
      <Button onPress={()=>{goToCompletion()}} title={`Complete Workout`}/>
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