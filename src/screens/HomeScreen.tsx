import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar, Switch } from 'react-native';
import { PostRepository } from '../services/postRepo';
import { Post } from '../models/Post';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isSimOffline, setIsSimOffline] = useState(false);
  const [status, setStatus] = useState<string>('Lade...');

  // Funktion zum Laden
  const loadData = () => {
    PostRepository.getPosts((data, isStale) => {
      setPosts(data);
      setStatus(isStale ? '⚠️ Offline (Cache)' : '✅ Online');
    }, isSimOffline);
  };

  useEffect(() => {
    loadData();
    console.log("Daten werden neu geladen!");
  }, [isSimOffline]);

  // Optimistic UI Beispiel
  const toggleLike = (id: number) => {
    setPosts(currentPosts => 
      currentPosts.map(p => p.id === id ? { ...p, liked: !p.liked } : p)
    );
    // Hier würde nun der API-Call in die Outbox gehen!
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.statusText}>{status}</Text>
        <View style={styles.toggleContainer}>
          <Text>Simulation Offline:</Text>
          <Switch 
            value={isSimOffline} 
            onValueChange={setIsSimOffline} 
          />
        </View>
      </View>
      
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => toggleLike(item.id)} style={styles.likeBtn}>
              <Text style={{ color: item.liked ? '#e74c3c' : '#bdc3c7', fontWeight: 'bold' }}>
                {item.liked ? '❤️ Favorit' : '🤍 Merken'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
  header: { padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#ddd', alignItems: 'center' },
  statusText: { fontSize: 14, fontWeight: 'bold' },
  card: { backgroundColor: '#fff', padding: 20, marginHorizontal: 15, marginVertical: 8, borderRadius: 12, elevation: 3 },
  title: { fontSize: 16, marginBottom: 12, color: '#2c3e50' },
  likeBtn: { alignSelf: 'flex-start', padding: 5 },
  toggleContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5, gap: 10 },
});