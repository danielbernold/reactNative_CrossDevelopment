import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Home</Text>
      <Button
        title="Zu Produktliste"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}
