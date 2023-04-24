import { StatusBar } from 'expo-status-bar';
import { useCallback, useState, useEffect} from 'react'
import { Text, View, Button } from 'react-native';
import { ButtonGroup } from '@rneui/themed';
import { StyleSheet} from 'react-native';

export default function HomeScreen({navigation}){
  const [selectedExercise, setSelectedExercise] = useState({})
  const [exerciseList, setExerciseList] = useState(
    [
      {
        //exerciseImg: "Push Up Image here"
        name : "Running",
        type: "Repetition",
        difficulty: -1,
        key: "0"
      },
      {
        //exerciseImg2: "Plank Image here"
        name : "Bench Press",
        type: "Repetition",
        difficulty: -1,
        key: "1"
      },
      {
        //exerciseImg3: "Running Image Here"
        name : "Squats",
        type: "Duration",
        difficulty: -1,
        key: "2"
      }
    ]
  )

  let difficulties = ["Easy","Medium", "Hard"]

  function updateSelection(selectedIndex){
    setCurrentAnswer(selectedIndex)
    if(answerList.length - 1 < questionIndex){
      answerList.push(selectedIndex)
    }else{
      answerList[questionIndex] = selectedIndex
    }
  }

  let getExercises = useCallback(()=>{
      return(
        exerciseList.map((item, currentIndex)=>{
          return(
            <View key={item.key}>
              <Text>{item.name}{"\n"}</Text>
              <ButtonGroup
                testID="choices"
                onPress={(selectedIndex)=>{
                  for(var i=0; i<exerciseList.length; i++){
                    if(i == currentIndex){
                      if(exerciseList[i].difficulty == selectedIndex){
                        exerciseList[i].difficulty = -1
                      }else{
                        exerciseList[i].difficulty = selectedIndex;
                      }
                    } else{
                      exerciseList[i].difficulty = -1;
                    }
                  }
                  setExerciseList([...exerciseList])
                  setSelectedExercise(exerciseList[currentIndex])
                }}
                selectedIndex={exerciseList[currentIndex].difficulty}
                buttons={difficulties}
                containerStyle={{width:200}}
                vertical="true"
              />
            </View>
          )
        })
      )
    }
  )

  return(
    <View style={styles.container}>
      {getExercises()}
      <Button onPress={()=>{
        if(selectedExercise.difficulty >= 0 ){
          navigation.navigate('Exercise', {currentExercise: selectedExercise});
        }
      }} title="Start Exercise"/>
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