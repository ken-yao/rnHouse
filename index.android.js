import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TestCom from './androidCom/TestCom';
import DrawerCom from './androidCom/DrawerCom';

class rnHouse extends Component {
  render() {
    return (
      <DrawerCom />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('rnHouse', () => rnHouse);
