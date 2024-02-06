import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FloatingActionButton} from '../components/FloatingActionButton';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <FloatingActionButton
        label="+1"
        position="right"
        onPress={() => setCounter(counter + 1)}
      />

      <FloatingActionButton
        label="-1"
        position="left"
        onPress={() => setCounter(counter - 1)}
      />

      {/* <TouchableOpacity
        onPress={() => setCounter(counter - 1)}
        style={styles.floatingActionButtonLeftLocation}>
        <View style={styles.floatingActionButton}>
          <Text style={styles.floatingActionButtonText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
});
