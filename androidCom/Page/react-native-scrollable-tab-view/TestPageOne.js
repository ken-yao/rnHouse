import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class TestPageOne extends Component {
  render() {
    return (
        <View>
        <Text style={styles.welcome}>
          This is a TestPageOne
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {fontSize: 20,textAlign: 'center', margin: 10,}
});