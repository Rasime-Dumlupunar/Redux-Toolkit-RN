import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../components/product/ProductItem';

const ProductList: React.FC = ({ navigation }) => {
  const { productsList } = useSelector(state => state.products);
  return (
    <View style={styles.container}>
      <FlatList
        data={productsList}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProductList;
