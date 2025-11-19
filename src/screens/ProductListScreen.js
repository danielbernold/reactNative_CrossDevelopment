import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import productService from '../services/productService';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productService.getProducts());
  }, []);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Produktliste</Text>
      {products.map((p) => (
        <View key={p.id} style={{ marginBottom: 8 }}>
          <Text>{p.name}</Text>
          <Button
            title="Details"
            onPress={() =>
              navigation.navigate('ProductDetail', { id: p.id })
            }
          />
        </View>
      ))}
    </View>
  );
}
