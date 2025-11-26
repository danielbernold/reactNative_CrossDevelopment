import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function FavoritePage() {
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Text style={{ fontSize: 64 }}>
        {favorite ? "❤️" : "🤍"}
      </Text>

      <TouchableOpacity
        style={{
          marginTop: 20,
          padding: 12,
          backgroundColor: "#E91E63",
          borderRadius: 8
        }}
        onPress={() => setFavorite(!favorite)}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Toggle Favorite
        </Text>
      </TouchableOpacity>

    </View>
  );
}
