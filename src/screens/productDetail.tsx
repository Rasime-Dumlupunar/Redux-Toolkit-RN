import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native';
import Button from '../components/UI/button';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/slice/cartSlice';

const ProductDetail: React.FC = ({ navigation, route }) => {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddCart = product => {
    dispatch(addCart(product));
    Alert.alert('Ürün ekleme başarılı', 'Ürün başarılı bir şekilde eklendi', [
      {
        text: 'Tamam',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.infoContainer}>
          <Text style={styles.text}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.priceContainer}>
        <View style={styles.row}>
          <Text style={styles.price}>{product.price} TL</Text>
          <Text style={styles.info}>Kargo Ücretsiz!</Text>
        </View>
        <View style={styles.button}>
          <Button onPress={() => handleAddCart(product)} name="Sepete Ekle" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 25,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 10,
  },
  brand: {
    fontSize: 16,
    marginVertical: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  infoContainer: {
    padding: 10,
    margin: 10,
  },
  price: {
    fontSize: 23,
    fontWeight: '700',
    color: 'tomato',
    padding: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  button: {
    flex: 4,
    paddingHorizontal: 5,
  },
  row: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    color: 'green',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ProductDetail;
