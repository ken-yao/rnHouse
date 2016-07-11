import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity} from 'react-native';

import HouseDetailTopBar from '../Partial/HouseDetailTopBar';

var {width, height} = Dimensions.get('window');

export default class BaiduPage extends Component{
    render(){
        return (
            <View style={{flex:1, backgroundColor:'#f8f8f8'}}>
                <View style={styles.topBar}>
                    <HouseDetailTopBar navigator={this.props.navigator} house_name={this.props.house_name} house_average_price={this.props.house_average_price} />
                </View>
                <View>
                    <Text>百度地图</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	topBar:{height:44},
});
