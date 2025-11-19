import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../state/cartSlice';
import productService from '../services/productService';

export default function ProductDetailScreen({ route }) {
  const { id } = route.params;
  const product = productService.getProductById(id);
  const dispatch = useDispatch();

  if (!product) return <Text>Produkt nicht gefunden</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24 }}>{product.name}</Text>
      <Button
        title="In den Warenkorb"
        onPress={() => dispatch(addToCart(product))}
      />
    </View>
  );
}
