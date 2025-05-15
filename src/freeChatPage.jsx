import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FreeChatPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Free Chat Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default FreeChatPage;