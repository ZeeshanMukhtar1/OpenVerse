import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import CustomButton from '../components/CustomButton';
import { StatusBar } from 'react-native';

function HomeScreen({ navigation }) {
  useEffect(() => {
    // Set the status bar color to transparent
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/h2.jpg')}>
      <View style={styles.centeredContainer}>
      <Text style={styles.heading}> Welcome in Four Seasons Hotel George V, Paris, France</Text>

        <Text style={styles.text}>Step into the epitome of luxury and hospitality at Four Seasons Hotel George V, Paris, where every detail is curated to ensure an extraordinary experience tailored exclusively for you.</Text>


      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Next"
          onPress={() => navigation.navigate('Login')}
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
  text: {
    
    fontSize: 16,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
    color: 'white',
    margin: 30,
  },
  heading:{
    color:'white',
    alignSelf:'center',
    justifyContent:'center',
    fontSize:27,
    fontWeight:'bold',
    marginHorizontal:30,
    marginTop:50,


  }
});

export default HomeScreen;
