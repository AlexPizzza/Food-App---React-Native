import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search" screenOptions={{
        headerTitleAlign: "center"
      }}>
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: "Business Search" }}/>
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} options={({ route }) => ({ title: route.params.name })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
