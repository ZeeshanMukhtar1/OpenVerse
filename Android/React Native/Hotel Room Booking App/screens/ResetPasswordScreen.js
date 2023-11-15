import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity,Image } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';

function RestPasswordScreen({ navigation }) {
  useEffect(() => {
    // Set the status bar color to transparent
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saa.jpg')}>




    <View style={styles.image}>
    <Image
          source={require('../src/number.png')}
          style={styles.image}
        />

    </View>
  
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:20,
    marginVertical:40,
  },
  container: {
    flex: 1,
    // marginVertical: 10,
    // marginHorizontal: 10,
    flexDirection: 'row',
  },
  customButton: {
    backgroundColor: '#bf9cd4',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    // marginVertical: 5,
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 3,
    color: 'white',
    marginBottom:15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
  image:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    height:'90%',
    width:'100%',
  }
});

export default RestPasswordScreen;
