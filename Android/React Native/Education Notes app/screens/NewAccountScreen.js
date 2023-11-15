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
function NewAccountScreen({ navigation }) {
  // useEffect to set the status bar color to transparent
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent', true);
  }, []);

  return (
    <BackgroundImage source={require('../src/saaa.jpg')}>
<ScrollView contentContainerStyle={styles.scrollContainer}>
  <View style={styles.container}>
    <Text style={styles.heading}>Learn Java</Text>
    <Text style={styles.paragraph}>
      Java is a widely-used, object-oriented programming language known for its
      portability and versatility. Here are some key concepts:
    </Text>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>1. Java Syntax</Text>
      <Text style={styles.conceptText}>
        Java syntax is structured and requires code to be written in classes and
        methods. It is designed to be readable and maintainable.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>2. Data Types</Text>
      <Text style={styles.conceptText}>
        Java supports various data types, including int, double, String, boolean,
        and more. Each type is used for different kinds of information.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>3. Control Flow</Text>
      <Text style={styles.conceptText}>
        Learn about if statements, loops (for, while, do-while), and switch
        statements for controlling the flow of your Java programs.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>4. Methods and Functions</Text>
      <Text style={styles.conceptText}>
        In Java, functions are called methods. They are blocks of code that
        perform a specific task and are invoked using the dot notation.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>5. Arrays</Text>
      <Text style={styles.conceptText}>
        Arrays in Java allow you to store multiple values of the same type in a
        single variable. They provide a way to manage collections of data.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>6. Object-Oriented Programming</Text>
      <Text style={styles.conceptText}>
        Java is an object-oriented language. You'll learn about classes and
        objects, encapsulation, inheritance, and polymorphism.
      </Text>
    </View>

    <View style={styles.conceptContainer}>
      <Text style={styles.conceptHeading}>7. Exception Handling</Text>
      <Text style={styles.conceptText}>
        Java provides mechanisms to handle runtime errors using try, catch, and
        finally blocks. This helps in writing robust and fault-tolerant code.
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
export default NewAccountScreen;
