import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { PRODUCTDETAIL } from '../../utils/routes';
import { useDispatch } from 'react-redux';
import { ShopAdd } from 'iconsax-react-nativejs';
import { addCart } from '../../store/slice/cartSlice';

const ProductItem: React.FC = ({ product }) => {
  const navigation = useNavigation();
  const disptach = useDispatch();

  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, { product: product })}
      style={styles.container}
    >
      <View style={styles.image}>
        <Image source={{ uri: product.image }} style={styles.images} />
      </View>
      <View style={styles.text}>
        <Text numberOfLines={2} style={styles.name}>
          {product.name}
        </Text>
        <Text style={styles.description}>{product.brand}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => disptach(addCart(product))}>
          <ShopAdd size={25} variant="Bold" color="green" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#F1E7E7',
    padding: 5,
  },
  image: {
    flex: 3,
  },
  text: {
    flex: 5,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 19,
    fontWeight: '700',
    color: 'black',
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    color: 'tomato',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  images: {
    width: 140,
    height: 120,
    resizeMode: 'cover',
  },
});

export default ProductItem;
