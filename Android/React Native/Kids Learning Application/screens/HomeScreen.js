import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import CustomButton from '../components/CustomButton';

function HomeScreen({ navigation }) {
  useEffect(() => {
    // Set the status bar color to transparent
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saa.jpg')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../src/kidsl.png')}
            style={styles.userImage}
          />
        </View>
        <Text style={{ fontSize: 14, fontWeight: 'bold',color:'white',marginHorizontal:30, }}>
        Explore a world of educational wonders tailored for young minds on our Kids Learning Platform{' '}
          <Text style={{ fontWeight: 'bold', color: 'blue' }}></Text>
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>
              <Text style={styles.boldText}></Text> Lets Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  userImage: {
    width: 350,
    height: 400,
    marginTop: 30,
  },
  buttonContainer: {
    margin: 20,
    marginTop: 100,
  },
  customButton: {
    backgroundColor: '#7f139a',
    padding: 10,
    borderRadius: 5,
    borderBlockColor:'red',
    marginTop:40,
    width:300,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold', // Make this text bold
    // fontSize: 30,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
  },
});

export default HomeScreen;
