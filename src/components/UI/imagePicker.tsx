//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Pressable } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const MyImagePicker: React.FC<Props> = ({
  label,
  placeholder,
  handleSelectImage,
  error,
  value,
}) => {
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      handleSelectImage(image);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={selectImage} style={styles.button}>
        {value ? (
          <Image source={{ uri: value }} style={styles.imagee} />
        ) : (
          <Text style={styles.text}>{placeholder}</Text>
        )}
      </Pressable>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  text: {
    fontSize: 18,
    margin: 15,
    color: 'gray',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    backgroundColor: '#d9e3f0',
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  error: {
    fontSize: 14,
    color: 'red',
    fontWeight: '600',
  },
  imagee: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
});

export default MyImagePicker;
