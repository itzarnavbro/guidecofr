import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const FreeChatPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header with Explore More text */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore More</Text>
      </View>
      
      {/* Main content container */}
      <View style={styles.mainContent}>
        {/* Logo section */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <View style={styles.logoCircle}></View>
          </View>
          <Text style={styles.logoText}>LoveAid</Text>
        </View>
        
        {/* Congratulations message */}
        <View style={styles.messageContainer}>
          <Text style={styles.congratsText}>Congratulations you got a</Text>
          <Text style={styles.freeText}>Free Chat!</Text>
        </View>
        
        {/* Start Chat Button */}
        <LinearGradient
          colors={['#F13B3B', '#B429A8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.buttonGradient}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Free Chat</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  headerText: {
    fontSize: 14,
    color: '#333',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 50,
    paddingBottom: 80,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '45deg' }],
  },
  logoCircle: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'white',
    position: 'absolute',
    top: 15,
    right: 15,
  },
  logoText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  congratsText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 5,
  },
  freeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  buttonGradient: {
    borderRadius: 30,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FreeChatPage;