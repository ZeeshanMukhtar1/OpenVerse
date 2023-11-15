import React, { useEffect } from 'react';
import { View, Text, StyleSheet,  StatusBar, TouchableOpacity } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';

function DetailScreen({ navigation }) {
  useEffect(() => {
    // Set the status bar color to transparent
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saa.jpg')}>
    <View style={styles.container}>
    <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('Skip')}
      >
        <Text style={styles.buttonText}>English Alphabets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('NewAccount')}
      >
        <Text style={styles.buttonText}>Name of The Months</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('OTPVerification')}
      >
        <Text style={styles.buttonText}>Name of the Weeks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('ResetPassword')}
      >
        <Text style={styles.buttonText}>Numbers </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>More </Text>
      </TouchableOpacity>

    </View>
     
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical:40,
  },
  customButton: {
    backgroundColor: '#bf9cd4',
    borderRadius: 20,
    // color:'white',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
   marginVertical:20,
   flexDirection:'row',
   
  },
  
 
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 0,
    color: 'white',
  },
 
  buttonText: {
    color: '#fff', // Text color set to blue
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 15,
    paddingHorizontal:10,
    paddingTop:8,
  },
});

export default DetailScreen;
