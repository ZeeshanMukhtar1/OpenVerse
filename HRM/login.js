import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goToDashboard = () => {
    const validEmail = 'anjum.pk6645445@gmail.com';
    const validPassword = 'Ali1234@';

    if (email === validEmail && password === validPassword) {
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Image source={require('./picture/hrm.jpg')} style={styles.background} />
      <View style={styles.contentContainer}>
        <Image source={require('./picture/logo4.png')} style={styles.profileImage} />
        <Text style={styles.title}>Login Screen</Text>
        <TextInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={goToDashboard} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ marginTop: 18, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Text style={{ color: 'blue', marginRight: 8 }}>Don't have an account?</Text>
          <TouchableOpacity onPress={goToSignUp}>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity onPress={goToSignUp} style={[styles.button, styles.signupButton]}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  profileImage: {
    width: 170,
    height: 220,
    borderRadius: 98,
    marginTop: -95,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: '100%',
    borderRadius: 14,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 15,
    marginRight: 0,
    width: '80%',
    alignSelf: 'flex-end',
    marginTop: 19,
    marginRight: 28,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'orange',
    alignSelf: 'flex-end',
    marginRight: 28,
    marginTop: 10,
  },

});

export default LoginScreen;
