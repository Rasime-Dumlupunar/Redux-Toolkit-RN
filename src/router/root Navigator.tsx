//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Counter from '../screens/Counter';
import {
  ADDPRODUCT,
  CART,
  COUNTER,
  COUNTER2,
  PRODUCTDETAIL,
  PRODUCTLIST,
} from '../utils/routes';
import Counter2 from '../screens/Counter2';
import ProductList from '../screens/products';
import AddProduct from '../screens/addProduct';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { AddSquare, ShoppingCart } from 'iconsax-react-nativejs';
import ProductDetail from '../screens/productDetail';
import { useSelector } from 'react-redux';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const { cart } = useSelector(state => state.cart);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={PRODUCTLIST}
        component={ProductList}
        options={({ navigation }) => ({
          headerRight: () => (
            <View style={styles.rightButton}>
              <Pressable onPress={() => navigation.navigate(ADDPRODUCT)}>
                <AddSquare size={28} color="black" />
              </Pressable>
              <Pressable onPress={() => navigation.navigate(CART)}>
                <ShoppingCart size={30} color="black" />
                <View style={styles.bard}>
                  <Text>{cart?.length}</Text>
                </View>
              </Pressable>
            </View>
          ),
        })}
      />
      <Stack.Screen name={ADDPRODUCT} component={AddProduct} />
      <Stack.Screen name={COUNTER} component={Counter} />
      <Stack.Screen name={COUNTER2} component={Counter2} />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <Button title="Geri" onPress={() => navigation.goBack()} />
          ),
        })}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen name={CART} component={Cart} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  rightButton: {
    flexDirection: 'row',
    gap: 7,
  },
  bard: {
    backgroundColor: 'tomato',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -5,
    right: -10,
  },
});

export default RootNavigator;
