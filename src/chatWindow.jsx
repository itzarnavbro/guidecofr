import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput, 
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ChatWindow = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: '1', text: 'Hello! How can I help you today?', sender: 'them', time: '10:01' },
        { id: '2', text: 'I have a question about my account', sender: 'me', time: '10:02' },
    ]);
    const [callTimer, setCallTimer] = useState(0);
    
    // Call timer logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCallTimer(prevTimer => prevTimer + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, {
                id: Date.now().toString(),
                text: message,
                sender: 'me',
                time: new Date().toLocaleTimeString().slice(0, 5)
            }]);
            setMessage('');
        }
    };

    const renderMessageItem = ({ item }) => (
        <View style={[
            styles.messageBubble,
            item.sender === 'me' ? styles.myMessage : styles.theirMessage
        ]}>
            <Text style={styles.messageText}>{item.text}</Text>
            <Text style={styles.messageTime}>{item.time}</Text>
        </View>
    );

    // Handling back navigation
    const handleBack = () => {
        // Implement navigation logic here
    };
    
    // Handle end call
    const handleEndCall = () => {
        // Implement end call logic here
    };

    return (
        <LinearGradient
          colors={['#F3A6E7', '#B429A8']}
          style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <StatusBar barStyle="dark-content" />
                
                {/* Header with profile */}
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={handleBack}
                        accessibilityLabel="Go back"
                    >
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.profileContainer}>
                        <View style={styles.profilePhotoContainer}>
                            <Image 
                                style={styles.profilePhoto}
                                source={{ uri: 'https://via.placeholder.com/60' }}
                                accessibilityLabel="Profile photo"
                            />
                        </View>
                        <View style={styles.profileInfo}>
                            <Text style={styles.profileName}>John Doe</Text>
                            <Text style={styles.profileStatus}>Active now</Text>
                        </View>
                    </View>
                    
                    <View style={styles.callControls}>
                        <Text style={styles.timerText}>{formatTime(callTimer)}</Text>
                        <TouchableOpacity 
                            style={styles.endButton}
                            onPress={handleEndCall}
                            accessibilityLabel="End call"
                        >
                            <Text style={styles.endButtonText}>End</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Chat messages */}
                <FlatList
                    style={styles.messagesContainer}
                    data={messages}
                    renderItem={renderMessageItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.messagesList}
                />
                
                {/* Message input */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        value={message}
                        onChangeText={setMessage}
                        placeholder="Type a message"
                        placeholderTextColor="#B8B8B8"
                        returnKeyType="send"
                        onSubmitEditing={handleSendMessage}
                    />
                    <TouchableOpacity 
                        style={styles.sendButton}
                        onPress={handleSendMessage}
                        accessibilityLabel="Send message"
                    >
                        <Text style={styles.sendButtonText}>Send</Text>
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
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.3)',
    },
    backButton: {
        paddingRight: 10,
        paddingVertical: 5,
    },
    backButtonText: {
        fontSize: 24,
        color: '#fff',
    },
    profileContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePhotoContainer: {
        marginRight: 10,
    },
    profilePhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
    },
    profileInfo: {
        justifyContent: 'center',
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileStatus: {
        fontSize: 12,
        color: '#eee',
    },
    callControls: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timerText: {
        color: '#fff',
        marginRight: 8,
        fontSize: 14,
    },
    endButton: {
        backgroundColor: '#ff4d4f',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 15,
    },
    endButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    messagesContainer: {
        flex: 1,
        marginVertical: 10,
    },
    messagesList: {
        paddingVertical: 10,
    },
    messageBubble: {
        maxWidth: '75%',
        padding: 12,
        borderRadius: 16,
        marginVertical: 4,
    },
    myMessage: {
        backgroundColor: '#E2D1F9',
        alignSelf: 'flex-end',
        borderBottomRightRadius: 4,
    },
    theirMessage: {
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        borderBottomLeftRadius: 4,
    },
    messageText: {
        color: '#333',
        fontSize: 16,
    },
    messageTime: {
        color: '#888',
        fontSize: 10,
        alignSelf: 'flex-end',
        marginTop: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 25,
        marginBottom: 15,
    },
    textInput: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginRight: 10,
        fontSize: 16,
        color: '#333',
    },
    sendButton: {
        backgroundColor: '#D2A8ED',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sendButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default ChatWindow;