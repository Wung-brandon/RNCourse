
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>

      <View style={styles.box2}>
        <Text>2</Text>
      </View>

      <View style={styles.box3}>
        <Text>3</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      padding: 50,
      flexDirection: 'row',
      width:'80%',
      height: 300,
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    box1: {
      backgroundColor: 'red',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    box2: {
      backgroundColor: 'green',
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    box3: {
      backgroundColor: 'purple',
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center'
    }


});
