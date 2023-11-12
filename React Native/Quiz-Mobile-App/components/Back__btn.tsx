// BackButton.js
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text
        style={{
          fontSize: 33,
          color: '#fff',
          textAlign: 'left',
          marginBottom: 10,
          marginTop: -20,
        }}>
        &#8592;
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
