import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Results from './screens/Results';
import Info from './screens/Info'; // importing info page
import AboutDeveloper from './screens/AboutDeveloper'; // importing AboutDeveloper page

import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{headerShown: false}}
        />
        {/*  route for the info page */}
        <Stack.Screen
          name="Info"
          component={Info}
          options={{headerShown: false}}
        />
        {/* route for navigating to AboutDeveloper page */}
        <Stack.Screen
          name="AboutDeveloper"
          component={AboutDeveloper}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 40,
//     paddingHorizontal: 16,
//   },
// });
