// DashboardScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DashboardScreen = () => {
  const navigation = useNavigation();

  const goToSection = (section) => {
    navigation.navigate(section);
  };

  const goToFullWidthPage = () => {
    navigation.navigate('FullWidthPage'); // Assuming you have a 'FullWidthPage' screen in your navigator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>HRM System</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => goToSection('Profile')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="user" size={30} color="black" />
          <Text style={styles.buttonText}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToSection('Admin')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="cogs" size={30} color="black" />
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToSection('HR')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="users" size={30} color="black" />
          <Text style={styles.buttonText}>HR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => goToSection('Leave')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="calendar" size={30} color="black" />
          <Text style={styles.buttonText}>Leave</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToSection('Payslip')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="money" size={30} color="black" />
          <Text style={styles.buttonText}>Payslip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToSection('Holiday')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="plane" size={30} color="black" />
          <Text style={styles.buttonText}>Holiday</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => goToSection('Announcement')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="bullhorn" size={30} color="black" />
          <Text style={styles.buttonText}>Announcement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToSection('Contact')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="address-book" size={30} color="black" />
          <Text style={styles.buttonText}>Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goToSection('Attendance')} style={[styles.button, { backgroundColor: 'pink' }]}>
          <Icon name="clipboard" size={30} color="black" />
          <Text style={styles.buttonText}>Attendance</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});

export default DashboardScreen;
