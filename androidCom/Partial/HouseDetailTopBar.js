import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

var APP_INFO = {
	apiUrl: 'http://app.anjia0769.com/api',
	AppID: '',
	AppSecret:''
};

export default class HouseTopBar extends Component {
	constructor(props){
		super(props);
	}

	_goBack(){
		this.props.navigator.pop();
	}

	render() {
		return (
			<View style={{height:44,flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'rgba(255,255,255,1)'}}>
				<View style={{flexDirection:'row', alignItems:'center'}}>
					<TouchableOpacity onPress={this._goBack.bind(this)}>
						<Icon name="ios-arrow-back" size={32} color="#444" style={{marginHorizontal: 10}} />
					</TouchableOpacity>
					<View>
						<Text style={{color:"#444"}}>{this.props.house_name}</Text>
						<Text style={{color:"#444"}}>均价：{this.props.house_average_price}元/m2</Text>
					</View>
				</View>
				<Icon name="ios-heart" size={32} color="#f96767" style={{marginHorizontal: 10}} />
			</View>
		);
	}
}
