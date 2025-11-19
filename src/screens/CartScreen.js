import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

export default function CartScreen() {
  const items = useSelector((state) => state.cart.items);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Warenkorb</Text>
      {items.length === 0 ? (
        <Text>Noch keine Produkte im Warenkorb.</Text>
      ) : (
        items.map((item) => <Text key={item.id}>{item.name}</Text>)
      )}
    </View>
  );
}
