import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainTabBar extends Component {
  render() {
    return (
        <View style={styles.tabs}>
            <View style={styles.menuItem}><TouchableOpacity onPress={() => this.props.goToPage(0)} style={styles.tab}><Icon name="ios-person" size={24} color={this.props.activeTab === 0 ? 'rgb(221,51,51)' : 'rgb(204,204,204)'} /><Text>Menu 1</Text></TouchableOpacity></View>
            <View style={styles.menuItem}><TouchableOpacity onPress={() => this.props.goToPage(1)} style={styles.tab}><Icon name="ios-person" size={24} color={this.props.activeTab === 1 ? 'rgb(221,51,51)' : 'rgb(204,204,204)'} /><Text>Menu 2</Text></TouchableOpacity></View>
            <View style={styles.menuItem}><TouchableOpacity onPress={() => this.props.goToPage(2)} style={styles.tab}><Icon name="ios-person" size={24} color={this.props.activeTab === 2 ? 'rgb(221,51,51)' : 'rgb(204,204,204)'} /><Text>Menu 3</Text></TouchableOpacity></View>
            <View style={styles.menuItem}><TouchableOpacity onPress={() => this.props.goToPage(3)} style={styles.tab}><Icon name="ios-person" size={24} color={this.props.activeTab === 3 ? 'rgb(221,51,51)' : 'rgb(204,204,204)'} /><Text>Menu 4</Text></TouchableOpacity></View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  menuItem:{flex:1, justifyContent:'center', alignItems:'center' },
  tab: {flex: 1, alignItems: 'center', justifyContent: 'center' },
  tabs: {height: 45, flexDirection: 'row', paddingTop: 5, paddingBottom:5, backgroundColor:'#f4f4f4'}
});
