import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input: React.FC<Props> = prop => {
  const { label, error } = prop;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...prop} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  input: {
    minHeight: 40,
    backgroundColor: '#d9e3f0',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
  },
  error: {
    fontSize: 14,
    color: 'red',
    fontWeight: '600',
  },
});

export default Input;
