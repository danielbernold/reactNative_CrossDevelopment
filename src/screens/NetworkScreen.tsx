import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { isOnline } from "src/services/networkService";


export default function NetworkScreen() {
    const [online, setOnline] = useState<boolean | null>(null);

    useEffect(() => {
        isOnline().then(setOnline);
    }, []);

    if (online === null) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return (
        <View style={styles.center}>
            <MaterialIcons
                name={online ? "wifi" : "wifi-off"}
                size={48}
                color={online ? "green" : "red"}/>
            
                
        </View>
    )
}

const styles = StyleSheet.create(
    {
        center: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            fontSize: 24,
            marginTop: 12,
        }
    }
);