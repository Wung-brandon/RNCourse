import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function GoalItem({ text, onDeleteItem }) {
  return (
    
      <View style={styles.goalItem}>
        <TouchableOpacity android_ripple={{color:'#dddddd'}} onPress={onDeleteItem}>
            <Text style={styles.goalText}>{text}</Text>
        </TouchableOpacity>
      </View>
    
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    fontSize: 16,
  },
  goalText: {
    padding: 10,
    color: '#ffffff',
  },
});
