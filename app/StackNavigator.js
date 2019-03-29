import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Movies from './Movies';
import Customers from './Customers';
import DetailsScreen from './Details'

const AppNavigator = createStackNavigator({
    Home: Home,
    Login:Login,
     Movies:Movies,
     Customers:Customers,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Login',
  });

export default createAppContainer(AppNavigator);