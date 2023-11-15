import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'react-native';

function LoginScreen({ navigation }) {
  useEffect(() => {
    // Set the status bar color to transparent
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saaa.jpg')}>
      <View style={styles.centeredContainer}>
        <Image
          source={require('../src/loginimg.png')}
          style={styles.image}
        />
        <Text style={styles.logintext}>Login</Text>
       
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
      
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
     
      
      </View>
      <View style={styles.container}></View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          onPress={() => navigation.navigate('Detail')}
          style={styles.customButton} // Apply customButton style
        />
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  logintext:{
    color:'white',
    fontWeight:'bold',
    fontSize:50,
    paddingBottom:20,

  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end', // Align the button to the bottom
    marginBottom: 20, // Add a 40px margin at the bottom
    color:'#fff',
  },
  customButton: {
    backgroundColor: '#134985',
    color:'white',
    borderRadius: 10,
    width: '80%',
    height: 45,
    marginVertical: 18,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 30, // Increase the font size
    // color: '#fff', // Set the text color to white
    fontWeight: 'bold', // Uncomment this line if you want the text to be bold
  },
  
  image: {
    width: 300,
    height: 300,
    margin: 0,
    marginTop:40,
  },
  input: {
    backgroundColor: 'white',
    marginVertical:10,
    borderRadius: 10,
    width: '80%',
    height: 45,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
   label: {
    color: 'white',
    marginBottom: 5,
    textAlign: 'left', // Align text to the left
  },
});

export default LoginScreen;
