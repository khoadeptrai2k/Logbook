import React from 'react';
import { StyleSheet } from "react-native";
import Home from "./screens/Home";
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native";
import Detail from "./screens/Detail";
import Notification from './notification/Notification';



const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'My home' }}
        />
        <Stack.Screen      
          name="Detail"
          component={Detail}
          options={{ title: 'My Detail' }}
        />
        <Stack.Screen 
          name="Notification" 
          component={Notification} 
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;