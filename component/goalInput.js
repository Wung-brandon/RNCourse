import { 
  TextInput,
  Alert, 
  StyleSheet, 
  View, 
  Button, 
  Modal,
  Image
 } from "react-native"
import {useState} from "react"
import goalImg from "../assets/images/goal.png"
function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(e) {
        setEnteredGoal(e);
      }
    function addGoalHandler() {
        if (enteredGoal === ""){
            Alert.alert('Warning', 'You must enter a goal before you add.');
            return;
          }
        props.onAddGoal(enteredGoal)
        setEnteredGoal('');
    }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image source={goalImg} style={styles.image} />
          <TextInput
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            placeholder="Your course goal"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
            </View>
            
          </View>
         
      </View>
    </Modal>
    
  )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        flexDirection: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    image: {
      width: 100,
      height: 100,
      margin: 20,
      resizeMode: 'contain',
    },
      textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderWidth: 1,
        marginRight: 5,
        width: '100%',
        padding: 10,
        color: '#120438',
        borderRadius: 6,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 12,
    },
    button: {
        marginHorizontal: 8,
        width: 100,
        borderRadius: 5,
    }

})