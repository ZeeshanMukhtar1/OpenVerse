import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const ListButton = ({ title, onPress, style, icon }) => {
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
    padding: 8,
    height: 40, // Decreased height
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white', // White background color
    borderRadius: 10,
    marginVertical: 2,
    color:'white',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginRight: 185,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginRight: 18,
    backgroundColor: 'white',
    height: 40,
    width: 40,
    color:'black',
    alignItems: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    padding: 7,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white', // Adjusted text color for better visibility on white background
    fontSize: 14,
    fontWeight: 'bold',
  },
};

export default ListButton;
