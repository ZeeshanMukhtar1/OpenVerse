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
function OTPVerificationScreen({ navigation }) {
  // useEffect to set the status bar color to transparent
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saaa.jpg')}>
<ScrollView contentContainerStyle={styles.scrollContainer}>
  <View style={styles.container}>
    <Text style={styles.heading}>Learn Ruby</Text>
    <Text style={styles.paragraph}>
      Ruby is a dynamic, object-oriented programming language known for its
      simplicity and readability. Here are some key concepts:
    </Text>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>1. Ruby Syntax</Text>
      <Text style={styles.conceptText}>
        Ruby syntax is designed to be elegant and easy to read. It emphasizes
        developer happiness and productivity.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>2. Data Types</Text>
      <Text style={styles.conceptText}>
        Ruby supports various data types, including integers, floats, strings,
        booleans, arrays, and hashes. Each type is used for different purposes.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>3. Control Flow</Text>
      <Text style={styles.conceptText}>
        Learn about if statements, unless statements, loops (for, while, until),
        and other control flow structures in Ruby.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>4. Methods</Text>
      <Text style={styles.conceptText}>
        Methods in Ruby are similar to functions in other languages. They are
        defined using the keyword `def` and can be called on objects or classes.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>5. Arrays and Hashes</Text>
      <Text style={styles.conceptText}>
        Arrays store ordered collections of items, while hashes store
        key-value pairs. Both are commonly used to organize and manipulate data.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>6. Object-Oriented Programming</Text>
      <Text style={styles.conceptText}>
        Ruby is a pure object-oriented language. You'll explore classes,
        objects, inheritance, encapsulation, and polymorphism.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>7. Blocks and Procs</Text>
      <Text style={styles.conceptText}>
        Blocks are chunks of code passed to methods, often associated with
        iterators. Procs are objects representing blocks of code that can be
        stored in variables.
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
export default OTPVerificationScreen;
