// components/ButtonCustom.js
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const ButtonCustom = ({ title, onPress, style, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.customButton, style]}>
      <View style={styles.buttonContent}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  customButton: {
    padding: 15,
    height: 100,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // You can set your desired background color
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding:40,
    marginRight: 50,
    fontWeight:'bold',
    fontSize:30,
  },
  iconContainer: {
    marginRight: 43,
    backgroundColor:'white',
    height:50,
    width:50,
    alignItems:'center',
    fontSize:60,
    fontWeight:'bold',
    padding:8,
    borderRadius:10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default ButtonCustom;
