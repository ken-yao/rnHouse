import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView
} from 'react-native';

import IndexSlider from '../Partial/IndexSlider';
import IndexSearchBar from '../Partial/IndexSearchBar';
import IndexHouseType from '../Partial/IndexHouseType';
import IndexFeaturedScroll from '../Partial/IndexFeaturedScroll';
import IndexHouseList from '../Partial/IndexHouseList';
import IndexTabBar from '../Partial/IndexTabBar';

var APP_INFO = {
	apiUrl: 'http://app.anjia0769.com/api',
	AppID: '',
	AppSecret:''
};

export default class IndexPage extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={{flex:1, position:'relative'}}>
				<ScrollView showsVerticalScrollIndicator={false} style={{position:'relative'}}>
					<View style={{height:180}}>
						<IndexSlider app_info={APP_INFO} />
						<IndexSearchBar openDrawer={this.props.openDrawer} />
					</View>
					<IndexHouseType />
					<IndexFeaturedScroll />
					<IndexHouseList app_info={APP_INFO} navigator={this.props.navigator}/>
				</ScrollView>
				<IndexTabBar />
			</View>
		);
	}
}