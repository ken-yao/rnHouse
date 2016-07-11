import React, { Component } from 'react';
import { StyleSheet,Text,View,TouchableOpacity} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';
import TestPageThree from './TestPageThree';
import TestPageFour from './TestPageFour';


import HouseDetailPage from './HouseDetailPage';
import BaiduPage from './BaiduPage';
import HouseDetailTabMenu from '../Partial/HouseDetailTabMenu';

var ybj = [];

export default class HouseAllDetailPage extends Component {
    constructor(props){
		super(props);

		this.state = {
			house_id: this.props.house_id,
			isLoaded: false,
		};
	}



	componentDidMount(){

	}

    render() {
        return (
            <ScrollableTabView initialPage={0} tabBarPosition='bottom' renderTabBar={() => <HouseDetailTabMenu />}>
                <HouseDetailPage source={this.props.ybj} navigator={this.props.navigator} house_id={this.props.house_id} house_name={this.props.house_name} house_average_price={this.props.house_average_price} house_newest_open_time={this.props.house_newest_open_time} house_handing_time={this.props.house_handing_time} house_address={this.props.house_address} house_featured={this.props.house_featured} house_apartment_styles={this.props.house_apartment_styles} />
                <HouseDetailPage source={this.props.sjt} navigator={this.props.navigator} house_id={this.props.house_id} house_name={this.props.house_name} house_average_price={this.props.house_average_price} house_newest_open_time={this.props.house_newest_open_time} house_handing_time={this.props.house_handing_time} house_address={this.props.house_address} house_featured={this.props.house_featured} house_apartment_styles={this.props.house_apartment_styles} />
                <BaiduPage navigator={this.props.navigator} house_id={this.props.house_id} house_name={this.props.house_name} house_average_price={this.props.house_average_price}/>
            </ScrollableTabView>
        );
    }
}
