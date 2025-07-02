import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import CartItem from '../components/Cart/cartItem';
import Button from '../components/UI/button';

const Cart: React.FC = ({ navigation, route }) => {
  const { cart, totalPrice } = useSelector(state => state.cart);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text>Sepetiniz boş.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <CartItem product={item} />}
        />
      )}
      <View style={styles.priceContainer}>
        <View style={styles.row}>
          <Text style={styles.info}>Toplam Fiyat</Text>
          <Text style={styles.price}> {totalPrice}</Text>
        </View>
        <View style={styles.button}>
          <Button name="Sepeti Onayla" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  price: {
    fontSize: 25,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    color: 'green',
  },
});

export default Cart;
