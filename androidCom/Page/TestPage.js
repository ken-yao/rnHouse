import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';
import TestPageThree from './TestPageThree';
import TestPageFour from './TestPageFour';
import MainTabBar from './MainTabBar';

export default class TestPage extends Component {
  render() {
    return (
        <ScrollableTabView initialPage={0} tabBarPosition='bottom' renderTabBar={() => <MainTabBar />}>
          <TestPageOne tabLabel="TestPageOne" />
          <TestPageTwo tabLabel="TestPageTwo" />
          <TestPageThree tabLabel="TestPageThree" />
          <TestPageFour tabLabel="TestPageFour" />
        </ScrollableTabView>
    );
  }
}