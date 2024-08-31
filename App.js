import { Alert, StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './component/goalItem';
import GoalInput from './component/goalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function closeAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    setGoalList(currentGoalsList => [
      ...currentGoalsList,
      { key: (goalList.length + 1).toString(), value: enteredGoal }
    ]);
    closeAddGoalHandler()
  }

  function removeGoalHandler(goalId) {
    console.log('Goal with id: ', goalId, 'has been removed');
    Alert.alert(
      'Goal Removed',
      'Are you sure you want to remove this goal?',
      [
        {
          text: 'Yes',
          onPress: () => {
            setGoalList(currentGoalsList =>
              currentGoalsList.filter(goal => goal.key !== goalId)
            );
            Alert.alert('Success', 'Goal has been removed successfully.');
          },
        },
        { text: 'No', style: 'cancel' },
      ]
    );
  }

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler}/>
        {modalIsVisible && <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={closeAddGoalHandler}/>}
        <View style={styles.goalContainer}>
          <FlatList
            data={goalList}
            renderItem={itemData => (
              <GoalItem
                text={itemData.item.value}
                onDeleteItem={() => removeGoalHandler(itemData.item.key)}
              />
            )}
            alwaysBounceVertical={false}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    
  },
  goalContainer: {
    flex: 5,
  },
});
