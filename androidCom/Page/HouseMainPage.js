import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity} from 'react-native';

import HouseTopBar from '../Partial/HouseTopBar';
import Icon from 'react-native-vector-icons/Ionicons';
import HouseLdPage from './HouseLdPage';

var APP_INFO = {
	apiUrl: 'http://app.anjia0769.com/api',
	AppID: '',
	AppSecret:''
};

export default class HouseMainPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			width:Dimensions.get('window').width,
			height:Dimensions.get('window').height,
			houseInfo: {},
			isLoaded: false,
			house_description:[],
			house_apartment_styles:[]
		};
	}

	componentDidMount(){
		this.fetchData();
	}

	// 获取数据源（数组）
	fetchData(){
		var params = '/house/show?house_id=' + this.props.house_id;
		var requestUrl = APP_INFO.apiUrl + params;

		fetch(requestUrl)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					houseInfo: responseData.data,
					isLoaded: true,
					house_description: responseData.data.house_description.split(","),
					house_apartment_styles: responseData.data.house_apartment_styles
				});
			})
			.done();
	}

	//点击跳转
	_onPressLd(){
		this.props.navigator.push({
			id: 'HouseLd',
			title: '楼栋信息页',
			component: HouseLdPage,
			passProps:{
				navigator: this.props.navigator,
				houseInfo: this.state.houseInfo,
			}
		});
	}

	render() {
		return (
			<View style={{flex:1}}>
			<ScrollView>
				<View>
					<View style={styles.mainImageContainer}>
						<Image style={styles.houseMainImage} source={{uri: this.state.houseInfo.house_distribution_image_source_url}} />
					</View>
					<View style={styles.topBar}>
						<HouseTopBar navigator={this.props.navigator} house_name={this.state.houseInfo.house_name} house_average_price={this.state.houseInfo.house_average_price} />
					</View>
				</View>
				<View>
					<View style={{flex:1}}>
						<Image style={{width:Dimensions.get('window').width,height:Dimensions.get('window').height * 11/20-62}} source={require('../../img/housebg.jpg')} />
					</View>
					<View style={{position:'absolute',top:0,left:0,width:Dimensions.get('window').width}}>
						<View style={styles.houseDescContainer}>
							<View style={styles.houseFeaturedContainer}>
								{this.state.house_description.map((elem, index) => {
									return (
										<View key={index} style={styles.houseDescItem}>
											<Text key={index} style={styles.houseDescItemText}>{elem}</Text>
										</View>
									);
								})}
							</View>
							<View style={styles.houseInfoContainer}>
								<TouchableOpacity style={styles.houseInfoRow}>
									<Text style={styles.houseInfoText}>{this.state.houseInfo.house_address}</Text>
									<Icon name="ios-navigate-outline" size={26} color="#fff" />
								</TouchableOpacity>
								<View style={styles.houseInfoHxRow}>
									<Text style={styles.houseInfoText}>所有户型：</Text>
									{this.state.house_apartment_styles.map((elem, index) => {
										return (
											<Text style={styles.houseInfoText} key={index}>{elem}</Text>
										);
									})}
								</View>
								<TouchableOpacity style={styles.houseInfoRow}>
									<Text style={styles.houseInfoText}>更多楼盘信息</Text>
									<Icon name="ios-arrow-forward" size={26} color="#fff" />
								</TouchableOpacity>
								<View style={styles.houseInfoRow}>
									<Text style={styles.houseInfoText}>{this.state.houseInfo.house_develop_name}</Text>
									<Text style={styles.houseInfoText}>开盘{this.state.houseInfo.house_open_time}</Text>
									<Text style={styles.houseInfoText}>交楼{this.state.houseInfo.house_handing_time}</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
			<View style={styles.buttonContainer}>
				<TouchableHighlight style={[styles.button,{marginRight:1}]} onPress={this._onPressLd.bind(this)}><Text style={styles.buttonText}>免费预约,得优惠</Text></TouchableHighlight>
				<TouchableHighlight style={[styles.button,{marginLeft:1}]}><Text style={styles.buttonText}>查看楼盘详情</Text></TouchableHighlight>
			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topBar:{width:Dimensions.get('window').width,position:'absolute',top:0,left:0},
	mainImageContainer:{width:Dimensions.get('window').width,height:Dimensions.get('window').height * 9/20},
	houseMainImage:{width:Dimensions.get('window').width,height:Dimensions.get('window').height * 9/20},
	houseDescContainer:{flex:1, margin:20},
	houseFeaturedContainer:{flexDirection:'row'},
	houseInfoContainer:{flex:1,marginTop:16,height:200},
	houseInfoRow:{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:0.5,borderColor:'#fff'},
	houseInfoHxRow:{flex:1,flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderColor:'#fff'},
	houseInfoText:{color:'#fff',fontSize:16,lineHeight:24},
	houseDescItem:{borderWidth:1,borderColor:'#fff',borderRadius:2,paddingVertical:2,paddingHorizontal:4,marginRight:8,},
	houseDescItemText:{color:'#fff',fontSize:16},
	buttonContainer:{width:Dimensions.get('window').width, flexDirection: 'row',justifyContent:'center',height:45},
	button:{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fec900',height:45},
	buttonText:{textAlign:'center'}
});
