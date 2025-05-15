import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatWindow = () => {
    return (
        <View style={styles.chatWindow}>
            <Text style={styles.header}>Chat Window</Text>
            {/* Chat messages and input will go here */}
        </View>
    );
};

const styles = StyleSheet.create({
    chatWindow: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default ChatWindow;