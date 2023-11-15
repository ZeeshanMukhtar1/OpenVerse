// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
