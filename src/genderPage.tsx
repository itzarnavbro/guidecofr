import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type GenderType = 'male' | 'female' | null;

const GenderPage = () => {
  const [selectedGender, setSelectedGender] = useState<GenderType>(null);
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleGenderSelect = (gender: GenderType) => {
    setSelectedGender(gender);
  };

  const handleDateChange = (text: string) => {
    // Format input as DD/MM/YYYY with automatic slashes
    let formattedText = text.replace(/[^0-9]/g, '');
    if (formattedText.length > 0) {
      if (formattedText.length <= 2) {
        // do nothing, just numbers
      } else if (formattedText.length <= 4) {
        formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2)}`;
      } else {
        formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2, 4)}/${formattedText.slice(4, 8)}`;
      }
    }
    setDateOfBirth(formattedText);
  };

  // Optionally, handle back navigation if needed
  const handleBack = () => {
    // Implement navigation logic here if using react-navigation
    // Example: navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#F3A6E7', '#B429A8']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        
        {/* Back button and header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBack}
            accessibilityLabel="Go back"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Enter your details</Text>
        </View>
        
        {/* Main content */}
        <View style={styles.content}>
          {/* Gender selection */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What's Your Gender?</Text>
            <View style={styles.genderOptions}>
              <TouchableOpacity 
                style={[
                  styles.genderOption, 
                  selectedGender === 'male' && styles.selectedGender
                ]}
                onPress={() => handleGenderSelect('male')}
                accessibilityLabel="Select male gender"
              >
                <View style={styles.genderIconContainer}>
                  <Text style={styles.genderIcon}>♂</Text>
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[
                  styles.genderOption, 
                  selectedGender === 'female' && styles.selectedGender
                ]}
                onPress={() => handleGenderSelect('female')}
                accessibilityLabel="Select female gender"
              >
                <View style={styles.genderIconContainer}>
                  <Text style={styles.genderIcon}>♀</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Date of birth section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Enter Your Date of Birth</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/YYYY"
              placeholderTextColor="#B8B8B8"
              keyboardType="number-pad"
              maxLength={10}
              value={dateOfBirth}
              onChangeText={handleDateChange}
              accessibilityLabel="Enter your date of birth"
              returnKeyType="done"
            />
          </View>
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
    marginTop: 20,
    marginBottom: 40,
  },
  backButton: {
    paddingRight: 15,
    paddingVertical: 5, // Increase touch area
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
  },
  headerText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  genderOptions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  genderOption: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  genderIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderIcon: {
    fontSize: 24,
    color: '#888',
  },
  selectedGender: {
    backgroundColor: '#EFEFEF',
    borderWidth: 2,
    borderColor: '#D2A8ED',
  },
  dateInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default GenderPage;