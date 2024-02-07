import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // flexDirection: 'row',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
  boxOne: {
    // flex: 3, // 3+2+1 = 6 -> 3/6 = 50% of the screen
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  boxTwo: {
    // flex: 2, // 3+2+1 = 6 -> 2/6 = 33% of the screen
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  boxThree: {
    // flex: 1, // 3+2+1 = 6 -> 1/6 = 16.6% of the screen
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
