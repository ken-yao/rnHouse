import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity} from 'react-native';

import HouseDetailTopBar from '../Partial/HouseDetailTopBar';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

export default class HouseLdPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			width:Dimensions.get('window').width,
			height:Dimensions.get('window').height,
			houseInfo: this.props.houseInfo,
			isLoaded: false,
			currentLdId: 0
		};
	}

	//滑动切换楼栋标签显示
	_onMomentumScrollEnd(e, state, context){
		//console.log(state.index);
		this.setState({
			currentLdId: state.index
		});
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'#ddd'}}>
			<View style={styles.topBar}>
				<HouseDetailTopBar navigator={this.props.navigator} house_name={this.state.houseInfo.house_name} house_average_price={this.state.houseInfo.house_average_price} />
			</View>
			<ScrollView>
				<View style={styles.mainImageContainer}>
					<Image style={styles.houseMainImage} source={{uri: this.state.houseInfo.house_distribution_image_source_url}} />

					{this.state.houseInfo.buildings.map((building, index) => {
						if(building && (parseInt(index) == parseInt(this.state.currentLdId))){
							return (
								<View key={index} style={{flex:1,position:'absolute',left:parseInt(building.building_position_x),top:parseInt(building.building_position_y)}}>
									<View style={{width:80,height:20,borderRadius:2,justifyContent:'center',alignItems:'center',backgroundColor:'#dd3333',}}>
										<Text style={{color:'#fff',fontSize:12,lineHeight:20}}>{building.building_name}</Text>
									</View>
									<Image style={{top:0,left:30,width:20,height:12}} source={require('../../img/triangle.png')} />
								</View>
							);
						}
					})}

				</View>
				<View style={styles.houseLdDescContainer}>
					<Swiper autoplay={false} height={140} width={Dimensions.get('window').width - 50} showsPagination={true} loop={false} onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}>
						{this.state.houseInfo.buildings.map((elem, index) => {
							return (
								<View key={index} style={styles.slide}>
									<TouchableOpacity style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
										<Text>楼栋：{elem.building_name}</Text>
										<Icon style={{marginRight:8}} name="ios-arrow-forward" size={20} color="#444" />
									</TouchableOpacity>
									<View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
										<Text>户型：</Text>
										{elem.apartments.map((hx, i) => {
											return (
												<Text key={i} style={{marginRight:8}}>{hx.apartment_title}</Text>
											);
										})}
									</View>
									<View style={{flex:1,flexDirection:'row',alignItems:'center'}}><Text style={{marginRight:8}}>数据：{elem.building_unit}个单元</Text><Text style={{marginRight:8}}>{elem.building_floor}层</Text><Text style={{marginRight:8}}>{elem.building_family}户</Text></View>
								</View>
							);
						})}
					</Swiper>
				</View>
				</ScrollView>
				<View style={styles.buttonContainer}>
					<TouchableHighlight style={[styles.button,{marginRight:1}]}><Text style={styles.buttonText}>免费预约,得优惠</Text></TouchableHighlight>
					<TouchableHighlight style={[styles.button,{marginLeft:1}]}><Text style={styles.buttonText}>查看楼盘详情</Text></TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topBar:{height:44},
	mainImageContainer:{width:Dimensions.get('window').width,height:Dimensions.get('window').height * 9/20},
	houseMainImage:{width:Dimensions.get('window').width,height:Dimensions.get('window').height * 9/20,position:'absolute',left:0,top:0},
	buttonContainer:{width:Dimensions.get('window').width,flexDirection: 'row',justifyContent:'center',height:45},
	button:{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fec900',height:45},
	buttonText:{textAlign:'center'},
	houseLdDescContainer:{flex:1,margin:10,padding:10,marginTop:20,backgroundColor:'#fff',borderRadius:8,justifyContent:'center',alignItems:'center'},
	slide:{flex:1,justifyContent: 'center',}
});
