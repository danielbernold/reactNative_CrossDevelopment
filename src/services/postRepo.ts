import AsyncStorage from '@react-native-async-storage/async-storage';
import { Post } from '../models/Post';

const CACHE_KEY = 'posts_cache';

export const PostRepository = {
  // Die Callback-Funktion bekommt die Daten und den Stale-Status
  getPosts: async (callback: (data: Post[], isStale: boolean) => void, isSimulationOffline: boolean): Promise<void> => {
    
    // 1. PHASE: "Stale" - Daten aus dem Cache laden
    const cachedString = await AsyncStorage.getItem(CACHE_KEY);
    if (cachedString) {
      const cachedData: Post[] = JSON.parse(cachedString);
      console.log("Cached Daten werden angezeigt");
      callback(cachedData, true); // UI zeigt sofort alte Daten
    }

    // 2. PHASE: "Revalidate" - Frische Daten vom Server
    if (isSimulationOffline) {
        console.warn("Simulation: Offline - kein API Call");
        return;
    }
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const freshData: Post[] = await response.json();

        const dataWithTime = freshData.map(p => ({
            ...p,
            title: `${p.title} (Gefetcht um: ${new Date().toLocaleTimeString()})`
        }));
      
        // Cache für das nächste Mal aktualisieren (Persistence)
        await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(dataWithTime));
        console.log("Jetzt wurden neue Daten geladen");
        callback(dataWithTime, false); // UI wird mit frischen Daten aktualisiert
    } catch (error) {
        console.warn("Netzwerkfehler - bleibe im Offline-Modus");
    }
  }
};
