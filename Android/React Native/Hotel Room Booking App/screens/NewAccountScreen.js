import React, { useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { Avatar, Button, Card } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

function NewAccountScreen({ navigation }) {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  const cardsData = [
    {
      title: 'Living Room',
      text: 'A cozy living space to relax and unwind',
      searchQuery: 'living-room',
    },
    {
      title: 'Bedroom',
      text: 'Comfortable bedroom for a good night\'s sleep',
      searchQuery: 'bedroom',
    },
    {
      title: 'Kitchen',
      text: 'Modern and well-equipped kitchen area',
      searchQuery: 'kitchen',
    },
    {
      title: 'Dining Room',
      text: 'Elegant dining area for meals with family',
      searchQuery: 'dining-room',
    },
    // Add more card data as needed
    {
      title: 'Luxurious Spa',
      text: 'A serene spa for relaxation and rejuvenation',
      searchQuery: 'spa',
    },
    {
      title: 'Home Office',
      text: 'Stylish and productive workspace at home',
      searchQuery: 'home-office',
    },
    {
      title: 'Game Room',
      text: 'Fun and exciting game room for entertainment',
      searchQuery: 'game-room',
    },
    {
      title: 'Garden View',
      text: 'Beautiful garden view for a peaceful time',
      searchQuery: 'garden-view',
    },
  ];

  return (
    <BackgroundImage source={require('../src/h6.jpg')}>

<View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Welcome to our Room Selection</Text>
        <Text style={styles.subTitle}>Choose Your Ideal Room</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        {cardsData.map((card, index) => (
          <Card key={index} style={styles.cardcontainer}>
            <Card.Cover
              style={styles.cardImage}
              source={{ uri: `https://source.unsplash.com/featured/?${card.searchQuery}` }}
            />
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardTitle}>{card.title}</Text>
              <Text style={styles.cardText}>{card.text}</Text>
              <View style={styles.cardActions}>
                <Button style={styles.cardButton}>Cancel</Button>
                <Button style={styles.cardButton}>Ok</Button>
              </View>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </BackgroundImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 0,
    marginTop: 20,
  },
  cardcontainer: {
    width: '90%', // Adjust the width for two cards in a row with some spacing
    margin: 8,
  },
  cardImage: {
    height: 150, // Decreased the height of the card image
  },
  cardContent: {
    padding: 5,
  },
  cardTitle: {
    fontSize: 18, // Adjust the font size for the card title
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 12, // Adjust the font size for the card content
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cardButton: {
    width: '100%', // Adjust the width of the buttons
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  
  subTitle: {
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
  },
});

export default NewAccountScreen;
