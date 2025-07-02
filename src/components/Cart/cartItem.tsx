import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, Pressable, View, Image } from 'react-native';
import { PRODUCTDETAIL } from '../../utils/routes';
import { Add, Minus, Trash } from 'iconsax-react-nativejs';
import { useDispatch } from 'react-redux';
import {
  decrementProduct,
  incrementProduct,
  removeItemCart,
} from '../../store/slice/cartSlice';

const CartItem: React.FC = ({ product }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, { product: product })}
      style={styles.container}
    >
      <View style={styles.image}>
        <Image source={{ uri: product!.image }} style={styles.images} />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>{product!.name}</Text>
        <Text style={styles.description}>{product!.brand}</Text>
        <Text style={styles.price}>{product!.price} TL</Text>
      </View>
      <View style={styles.trash}>
        <Pressable onPress={() => dispatch(removeItemCart(product))}>
          <Trash size={25} variant="Bold" color="orange" />
        </Pressable>

        <View style={styles.count}>
          <Pressable onPress={() => dispatch(decrementProduct(product))}>
            <Minus size={25} variant="Bold" color="red" />
          </Pressable>
          <Text style={styles.countRow}>{product.count}</Text>
          <Pressable onPress={() => dispatch(incrementProduct(product))}>
            <Add size={25} variant="Bold" color="green" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F4EBD3',
    padding: 15,
    borderRadius: 10,
  },
  image: {
    flex: 3,
  },
  text: {
    flex: 3,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  price: {
    fontWeight: '600',
    fontSize: 17,
    color: 'tomato',
    marginTop: 5,
  },
  description: {
    fontSize: 17,
    color: 'gray',
    marginTop: 5,
  },
  images: {
    width: 140,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  trash: {
    paddingLeft: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  count: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countRow: {
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
    fontWeight: '600',
  },
});

export default CartItem;
