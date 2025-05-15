import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GenderPage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Gender Page</Text>
            {/* Add your content here */}
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

export default GenderPage;