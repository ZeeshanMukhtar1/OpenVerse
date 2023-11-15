// SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    if (username && password) {
      alert('Signup successful!');
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('./picture/hrm.jpg')} style={styles.background} />
      <View style={styles.contentContainer}>
        <Image source={require('./picture/logo4.png')} style={styles.profileImage} />
        <Text style={styles.title}>Sign Up Screen</Text>
        <TextInput
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput 
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity onPress={signUp} style={styles.button}>
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
    borderRadius: 8,
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
    borderWidth: 2,
    marginVertical: 10,
    padding: 14,
    width: '100%',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 15,
    width: '77%',
    alignSelf: 'flex-end',
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 41,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
