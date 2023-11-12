import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type TitleProps = {
  title: string;
};

export default function Title({title}: TitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Lato, Arial, sans-serif',
  },
});
