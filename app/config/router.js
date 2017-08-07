import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Main from '../screens/Main';
import DrinkPage from '../screens/DrinkPage';
import Results from '../screens/Results'


export const Root = StackNavigator({
  Main: {
    screen: Main
  },
  DrinkPage: {
    screen: DrinkPage,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.drinks.strDrink}`
  })},
  Results: {
      screen: Results
    }
});
