import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text } from 'react-native';
import { fetchPosts } from 'src/services/api';
import { Post } from 'src/types/post';

export default function ApiScreen() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchPosts()
      .then(posts => setData(posts))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error loading posts.</Text>;
  
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 12 }}>
          <Text style={{ fontWeight: "bold"}}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
}
