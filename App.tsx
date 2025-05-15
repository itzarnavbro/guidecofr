import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';

const App = () => {
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
        
        {/* Promo message */}
        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>First Chat with Love Coach is FREE!</Text>
        </View>
        
        {/* Sign up buttons */}
        <View style={styles.signupContainer}>
          {/* Truecaller Button */}
          <TouchableOpacity style={styles.signupButton}>
            <View style={styles.buttonContent}>
              <View style={styles.truecallerIconCircle}>
                <Text style={styles.iconText}>T</Text>
              </View>
              <Text style={styles.buttonText}>Sign up with Truecaller</Text>
            </View>
          </TouchableOpacity>
          
          {/* OR Divider */}
          <View style={styles.dividerContainer}>
            <Text style={styles.dividerText}>OR</Text>
          </View>
          
          {/* Google Button */}
          <TouchableOpacity style={styles.signupButton}>
            <View style={styles.buttonContent}>
              <View style={styles.googleIconCircle}>
                <Text style={styles.iconText}>G</Text>
              </View>
              <Text style={styles.buttonText}>Sign up with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
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
  promoContainer: {
    backgroundColor: '#FDCFF3',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 18,
    marginBottom: 35,
    borderBottomRightRadius: 5,
  },
  promoText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  signupContainer: {
    width: '100%',
  },
  signupButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  truecallerIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0089CF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  googleIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  dividerContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  dividerText: {
    fontSize: 14,
    color: '#777',
    fontWeight: '500',
  },
});

export default App;