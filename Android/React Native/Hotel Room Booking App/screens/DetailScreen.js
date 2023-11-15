import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'react-native';

function DetailScreen({ navigation }) {
  useEffect(() => {
    // Set the status bar color to transparent
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/h1.jpg')}>
      <View style={styles.centeredContainer}>
        <Image
          source={require('../src/user.png')}
          style={styles.image}
        />
        <Text style={styles.h1}>Login Here </Text>
       
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="white" // Text color for placeholder
        />
      
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor="white" // Text color for placeholder
        />
     
     
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          onPress={() => navigation.navigate('NewAccount')}
          style={styles.customButton} // Apply customButton style
        />
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  image: {
    width: 110,
    height: 110,
    margin: 30,
    marginTop: 30,
  },
  input: {
    backgroundColor: 'transparent',
    marginVertical: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
    width: '80%',
    height: 45,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: 'white',
    fontSize: 18,
  },
  customButton: {
    backgroundColor: '#134985',
    color: 'white',
    borderRadius: 30,
    width: '80%',
    height: 45,
    marginVertical: 18,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  h1: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    margin: 15,
  },
});

export default DetailScreen;
