// components/BackgroundImage.js
import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const BackgroundImage = ({ source, children }) => {
  return (
    <ImageBackground source={source} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%", // Cover 100% of the width
    height: "100%", // Cover 100% of the height
    resizeMode:'cover',
   
  },
});

export default BackgroundImage;
