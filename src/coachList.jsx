import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CoachList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Coach List</Text>
            {/* Add coach list content here */}
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
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default CoachList;