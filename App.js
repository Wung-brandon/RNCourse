
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from'react';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalList, setGoalList] = useState([]);
  function goalInputHandler(e){
    setEnteredGoal(e);
  }

  function addGoalHandler(){
    setGoalList(currentGoalsList => [...currentGoalsList, enteredGoal]);
    setEnteredGoal('');
  }
  return (
    <View style={styles.appContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} onChangeText={goalInputHandler} placeholder="Your course goal"/>
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalContainer}>
        {goalList.map((goal, i) => (
          <View style={styles.goalItem}>
             <Text style={styles.goalText} key={i}>{goal}</Text>
            </View>
         ))}
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      flex:1,
      paddingTop: 50,
      paddingHorizontal: 16
    },
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomColor: '#cccccc',
      borderBottomWidth: 1,
    },
    textInput: {
      borderColor: '#cccccc',
      borderWidth: 1,
      marginRight:5,
      width: '80%',
      marginRight: 9,
      padding: 6,
    },
    goalContainer:{
      flex: 5,
    },
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
      padding: 10,
      fontSize: 16,
    },
    goalText:{
      color: 'white',
    }


});
