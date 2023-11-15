import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListButton from '../components/ListButton';

function DetailScreen({ navigation }) {
  useEffect(() => {
    // Set the status bar color to transparent
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <BackgroundImage source={require('../src/b5.jpg')}>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Text style={styles.h1}>Birthday wishes of all</Text>
          <Text style={styles.h1}>types of ideas category wise</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <ListButton
              title="    Birthday "
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="birthday-cake" size={20} color="black" />}
            />

            <ListButton
              title="        Family"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="group" size={20} color="black" />}
            />

            <ListButton
              title="     Friends "
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="group" size={20} color="black" />}
            />

            <ListButton
              title="           Love"
              onPress={() => navigation.navigate('home')}
              style={[styles.customButton, { backgroundColor: '#8589AC'}]}
              icon={<Icon name="heart" size={20} color="black" />}
            />

            <ListButton
              title="TargeteAge"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="book" size={20} color="black" />}
            />
              <ListButton
              title="         Funny "
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="star" size={20} color="black" />}
            />
              <ListButton
              title="       Belated"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="birthday-cake" size={20} color="black" />}
            />
              <ListButton
              title=" Inspiration"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="bell" size={20} color="black" />}
            />
              <ListButton
              title="   Religious"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#8589AC' }]}
              icon={<Icon name="birthday-cake" size={20} color="black" />}
            />
          </View>
        </View>
      </View>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  firstContainer: {
    height: '4%',
    paddingHorizontal: 10,
    marginTop: 70,
    marginBottom:12,
    padding: 0,
    margin: 0,
  },
  h1: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom:0,
    paddingBottom:0,
  },
  bottomContainer: {
    height: '86%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 6,
    position: 'relative',
  },
  buttonContainer: {},
  customButton: {
    padding: 10,
    height: 50,
    width: 340,
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 7,
    color: 'white',
  },
});

export default DetailScreen;
