import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, Button } from 'react-native';
import { COUNTER } from '../utils/routes';
import { useSelector } from 'react-redux';

const Counter2: React.FC = ({ route, navigation }) => {
  const { count } = useSelector(state => state.counter);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{count}</Text>

      <Button
        title="Counter'a git"
        onPress={() => navigation.navigate(COUNTER)}
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

export default Counter2;
