import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import CustomButton from '../components/CustomButton';

function Skip2({ navigation }) {
  return (
    <BackgroundImage source={require('../src/bg3.jpg')}>
      <View style={styles.container}>
        <Text>Skip 2 Screen</Text>
        <Button
          title="Go to Detail Screen"
          onPress={() => navigation.navigate('NewAccount')}
        />
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
});

export default Skip2;
