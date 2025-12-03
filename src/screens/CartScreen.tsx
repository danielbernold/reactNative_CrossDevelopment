import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          source={{ uri: "https://picsum.photos/300/200" }}
          style={styles.image}
        />

        <Text style={styles.title}>Awesome Product</Text>

        <Text style={styles.price}>€ 19.99</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 16
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }
});
