import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button: React.FC = props => {
  const { name } = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

export default Button;
