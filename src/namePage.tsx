import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NamePage: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Name Page</Text>
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

export default NamePage;