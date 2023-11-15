import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BackgroundImage from '../components/BackgroundImage';

// SkipScreen Component
function SkipScreen({ navigation }) {
  // useEffect to set the status bar color to transparent
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saaa.jpg')}>
 <ScrollView contentContainerStyle={styles.scrollContainer}>
  <View style={styles.container}>
    <Text style={styles.heading}>Learn Python</Text>
    <Text style={styles.paragraph}>
      Python is a high-level, versatile programming language known for its
      readability and ease of use. Here are some key concepts:
    </Text>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>1. Python Syntax</Text>
      <Text style={styles.conceptText}>
        Python syntax is simple and easy to learn, making it an excellent choice
        for beginners.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>2. Data Types</Text>
      <Text style={styles.conceptText}>
        Python supports various data types, including integers, floats,
        strings, booleans, lists, and dictionaries.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>3. Control Flow</Text>
      <Text style={styles.conceptText}>
        Learn about if statements for decision-making, loops (for and while) for
        repetitive tasks, and other control flow structures.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>4. Functions</Text>
      <Text style={styles.conceptText}>
        Functions in Python allow you to organize code into reusable blocks.
        They take inputs (arguments), perform actions, and can return outputs.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>5. Lists and Tuples</Text>
      <Text style={styles.conceptText}>
        Lists are ordered collections, while tuples are immutable ordered
        collections. Both are used to store multiple items in a single variable.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>6. Dictionaries</Text>
      <Text style={styles.conceptText}>
        Dictionaries store data in key-value pairs, providing a way to
        represent relationships between different pieces of information.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>7. Classes and Objects</Text>
      <Text style={styles.conceptText}>
        Object-oriented programming in Python involves creating classes that
        model real-world entities. Objects are instances of these classes,
        bundling data and functions that operate on that data.
      </Text>
    </View>

    {/* Add more concepts as needed */}

  </View>
</ScrollView>

    </BackgroundImage>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  conceptContainer: {
    marginBottom: 20,
  },
  conceptHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  conceptText: {
    fontSize: 16,
    color: 'white',
  },
});

// Export SkipScreen Component
export default SkipScreen;
