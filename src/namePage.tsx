import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NamePage: React.FC = () => {
    const [name, setName] = useState('');

    return (
        <LinearGradient
            colors={['#FF9ED8', '#9C27B0']} 
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Enter your details</Text>
                </View>
                
                <View style={styles.contentContainer}>
                    <Text style={styles.greeting}>Hey there!</Text>
                    <Text style={styles.question}>What is your name?</Text>
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your name"
                        placeholderTextColor="#A0A0A0"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        marginBottom: 40,
    },
    backButton: {
        padding: 5,
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        marginLeft: 15,
    },
    contentContainer: {
        flex: 1,
    },
    greeting: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
    question: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 30,
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 15,
        fontSize: 16,
    },
    bottomContainer: {
        marginBottom: 30,
    },
    nextButton: {
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
    },
    nextButtonText: {
        color: '#9C27B0',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default NamePage;