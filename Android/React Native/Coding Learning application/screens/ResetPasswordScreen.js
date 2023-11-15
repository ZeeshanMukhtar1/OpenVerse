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
function ResetPasswordScreen({ navigation }) {
  // useEffect to set the status bar color to transparent
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saaa.jpg')}>
<ScrollView contentContainerStyle={styles.scrollContainer}>
  <View style={styles.container}>
    <Text style={styles.heading}>Learn Swift</Text>
    <Text style={styles.paragraph}>
      Swift is a powerful and intuitive programming language developed by Apple
      for building iOS, macOS, watchOS, and tvOS applications. Here are some
      key concepts:
    </Text>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>1. Swift Syntax</Text>
      <Text style={styles.conceptText}>
        Swift syntax is concise and expressive, designed to be readable and
        clear. It incorporates modern programming language features.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>2. Data Types</Text>
      <Text style={styles.conceptText}>
        Swift supports various data types, including integers, doubles,
        strings, booleans, arrays, and dictionaries. Each type is strongly
        typed, providing safety and clarity.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>3. Control Flow</Text>
      <Text style={styles.conceptText}>
        Learn about if statements, switch statements, and loops (for-in, while)
        for controlling the flow of your Swift programs.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>4. Functions</Text>
      <Text style={styles.conceptText}>
        Functions in Swift are first-class citizens, supporting features like
        multiple return values, parameter names, and default parameter values.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>5. Optionals</Text>
      <Text style={styles.conceptText}>
        Swift introduces optionals to handle the absence of a value. This helps
        prevent runtime crashes due to nil values.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>6. Object-Oriented Programming</Text>
      <Text style={styles.conceptText}>
        Swift supports object-oriented programming principles, including
        classes, structures, enums, inheritance, and protocols.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>7. Closures</Text>
      <Text style={styles.conceptText}>
        Closures are self-contained blocks of functionality that can be passed
        around and used in Swift code. They capture and store references to
        variables and constants from the surrounding context.
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
export default ResetPasswordScreen;
