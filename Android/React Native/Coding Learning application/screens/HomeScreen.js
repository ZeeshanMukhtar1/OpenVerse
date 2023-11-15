import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library
import ButtonCustom from '../components/ButtonCustoms';

function HomeScreen({ navigation }) {
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
          <Text style={styles.h1}>Great Collection of 5000+ Birthday</Text>
          <Text style={styles.h1}>Wishes to send Wishes.</Text>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <ButtonCustom
              title="   Birthday Messages"
              onPress={() => navigation.navigate('Detail')}
              style={[styles.customButton, { backgroundColor: '#FFD700' }]}
              icon={<Icon name="birthday-cake" size={20} color="black" />}
            />

            <ButtonCustom
              title="   Top  100 Messages"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#FF6347' }]}
              icon={<Icon name="percent" size={20} color="black" />}
            />

            <ButtonCustom
              title="   Favorite    Message"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#9049f6' }]}
              icon={<Icon name="star" size={20} color="black" />}
            />

            <ButtonCustom
              title="Birthday Notification"
              onPress={() => navigation.navigate('home')}
              style={[styles.customButton, { backgroundColor: '#32CD32' }]}
              icon={<Icon name="bell" size={20} color="black" />}
            />

            <ButtonCustom
              title="Create Birthday Card"
              onPress={() => navigation.navigate('Home')}
              style={[styles.customButton, { backgroundColor: '#5243dc' }]}
              icon={<Icon name="birthday-cake" size={20} color="black" />}
            />
          </View>
        </View>
         {/* SMS icon at the bottom-center */}
         <View style={styles.bottomIconsContainer}>
            <TouchableOpacity>
              <Icon name="comment" size={30} color="white" />
            </TouchableOpacity>
          </View>
          
          {/* Three dots icon at the bottom-left */}
          <TouchableOpacity style={styles.bottomLeftIcon}>
            <Icon name="ellipsis-v" size={25} color="white" />
          </TouchableOpacity>

          {/* Share icon at the bottom-right */}
          <TouchableOpacity style={styles.bottomRightIcon}>
            <Icon name="share" size={25} color="white" />
          </TouchableOpacity>
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
    height: '13%',
    paddingHorizontal: 10,
    marginTop: 90,
  },
  h1: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
  bottomContainer: {
    height: '66%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingBottom: 22,
    position: 'relative', // Add this line to position absolute elements relative to this container
  },
  bottomIconsContainer: {
    position: 'absolute',
    bottom: 27,
    backgroundColor: '#4CAF50',
    borderRadius: 30,
    padding: 15,
  },
  bottomLeftIcon: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  bottomRightIcon: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  buttonContainer: {},
  customButton: {
    padding: 10,
    height: 70,
    width: 340,
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default HomeScreen;
