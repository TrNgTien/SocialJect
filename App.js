/*
* Where the application begins.
* Contributors: {
  Hiển Long: 17 June
 
}
*
*
* Changelog: {
  17 June: Changed the default beginning code of react native to be more easy to read.
}
Main Function: export Screen02, navigation of screen3,4
sub function: UI of Screen2 in Screen2.Js

*/

import React from 'react';
// import MainNavigator from './src/navigation/core/MainNavigator';
import {View, StyleSheet} from 'react-native';

// You can import from local files
import Screen2 from './screen/Screen2';
import MainNavigator from './src/navigation/core/MainNavigator';

export default function App() {
  return (
    <MainNavigator/>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
