import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HouseDetailTabMenu extends Component {
  render() {
    return (
        <View style={styles.tabs}>
            <View style={styles.menuItem}><TouchableOpacity onPress={() => this.props.goToPage(0)} style={styles.tab}><Icon name="ios-home" size={24} color={this.props.activeTab === 0 ? 'rgb(221,51,51)' : 'rgb(204,204,204)'} /><Text>样板间</Text></TouchableOpacity></View>
            <View style={styles.menuItem}><TouchableOpacity onPress={() => this.props.goToPage(1)} style={styles.tab}><Icon name="ios-color-filter" size={24} color={this.props.activeTab === 1 ? 'rgb(221,51,51)' : 'rgb(204,204,204)'} /><Text>实景图</Text></TouchableOpacity></View>
            <View style={styles.menuItem}><TouchableOpacity onPress={() => this.props.goToPage(2)} style={styles.tab}><Icon name="ios-navigate" size={24} color={this.props.activeTab === 2 ? 'rgb(221,51,51)' : 'rgb(204,204,204)'} /><Text>周边</Text></TouchableOpacity></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem:{flex:1, justifyContent:'center', alignItems:'center' },
  tab: {flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabs: {height: 45, flexDirection: 'row', backgroundColor:'#f4f4f4'}
});
