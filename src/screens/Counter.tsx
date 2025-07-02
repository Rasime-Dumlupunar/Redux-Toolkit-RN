import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { COUNTER2 } from '../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../store/slice/counterSlice';

const Counter: React.FC = () => {
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text>{count}</Text>
      <Button title="Artır" onPress={() => dispatch(increment())} />
      <Button title="Azalt" onPress={() => dispatch(decrement())} />
      <Button
        title="Sayı ata"
        onPress={() => dispatch(incrementByAmount(100))}
      />

      <Button title="Sıfırla" onPress={() => dispatch(reset())} />

      <Button
        title="Counter 2'ye git"
        onPress={() => navigation.navigate(COUNTER2, { count })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default Counter;
