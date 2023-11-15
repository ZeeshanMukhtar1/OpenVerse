import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SkipScreen from './screens/SkipScreen';
// import Skip2 from './screens/Skip2';
import NewAccountScreen from './screens/NewAccountScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import LoginScreen from './screens/LoginScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
// import next2 from './screens/next2';

const Stack = createStackNavigator();

const AppNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Skip" component={SkipScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="n2" component={next2} options={{ headerShown: false }} /> */}
        <Stack.Screen name="NewAccount" component={NewAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigate;
