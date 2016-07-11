import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity, Modal} from 'react-native';

import HouseTopBar from '../Partial/HouseTopBar';
import Icon from 'react-native-vector-icons/Ionicons';
import HouseLdPage from './HouseLdPage';
import HouseDetailPage from './HouseDetailPage';

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
			house_apartment_styles:[],
			modalVisible:false
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

	//点击跳转楼栋页
	_onPressLd(){
		this.props.navigator.push({
			id: 'HouseLd',
			title: '楼栋信息页',
			component: HouseDetailPage,
			passProps:{
				navigator: this.props.navigator,
				house_id: this.state.houseInfo.house_id,
				house_name: this.state.houseInfo.house_name,
				house_average_price: this.state.houseInfo.house_average_price,
				house_distribution_image_source_url: this.state.houseInfo.house_distribution_image_source_url,
				buildings: this.state.houseInfo.buildings,
				apartments: this.state.houseInfo.apartments
			}
		});
	}

	//点击跳转详情页
		_onPressDetail(){
        this.props.navigator.push({
            id: 'HouseAllDetail',
            title: '楼盘详情页',
            component: HouseLdPage,
            passProps:{
                navigator: this.props.navigator,
                house_id: this.state.houseInfo.house_id,
                house_name: this.state.houseInfo.house_name,
                house_average_price: this.state.houseInfo.house_average_price,
                house_open_time:this.state.houseInfo.house_open_time,
                house_newest_open_time:this.state.houseInfo.house_newest_open_time,
                house_handing_time:this.state.houseInfo.house_handing_time,
                house_address: this.state.houseInfo.house_address,
                house_featured: this.state.houseInfo.house_featured,
                house_apartment_styles:this.state.houseInfo.house_apartment_styles,
                houseInfo: this.state.houseInfo,
                ybj: this.state.houseInfo.ybj,
                sjt: this.state.houseInfo.sjt
            }
        });
    }

		_setModalVisible(visible) {
			this.setState({
				modalVisible: visible
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
								<TouchableOpacity style={styles.houseInfoRow} onPress={()=>this._setModalVisible(true)}>
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
				<TouchableOpacity style={[styles.button,{marginRight:1}]} onPress={this._onPressLd.bind(this)}><Text style={styles.buttonText}>免费预约,得优惠</Text></TouchableOpacity>
				<TouchableOpacity style={[styles.button,{marginLeft:1}]} onPress={this._onPressDetail.bind(this)}><Text style={styles.buttonText}>查看楼盘详情</Text></TouchableOpacity>
			</View>

			<Modal
			  animationType='slide'
			  transparent={true}
			  visible={this.state.modalVisible}
				onRequestClose={() => {this._setModalVisible(false)}}
			  >
			  <View style={{flex:1,width:Dimensions.get('window').width, backgroundColor:'rgba(255,255,255,1)'}}>
					<View style={{justifyContent:'center',height:40,paddingLeft:10,width:Dimensions.get('window').width, backgroundColor:'#ffcc00'}}>
						<Text style={{color:'#444'}} onPress={this._setModalVisible.bind(this, false)}>关闭</Text>
					</View>

					<ScrollView style={styles.infoContainer}>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>开发商</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_develop_name}</Text>
						</View>

						<View style={styles.infoDivider}></View>

						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>楼盘状态</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_sale_status}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>参考均价</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_average_price}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>最新开盘</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_open_time}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>最早交房</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_handing_time}</Text>
						</View>

						<View style={styles.infoDivider}></View>

						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>楼盘地址</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_address}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>售楼处地址</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_sales_address}</Text>
						</View>

						<View style={styles.infoDivider}></View>

						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>产权年限</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_limit_years}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>装修标准</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_decoration_status}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>容积率</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_volume}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>绿化率</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_green}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>规划户数</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_plan_family}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>规划车位</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_parking_num}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>物业类型</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_type}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>物业公司</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_company}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>物业费</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_fee}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>供暖方式</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_heat}</Text>
						</View>
						<View style={styles.infoRow}>
							<Text style={styles.infoTitle}>水电燃气</Text>
							<Text style={styles.infoContent}>{this.state.houseInfo.house_water}</Text>
						</View>
			    </ScrollView>
			  </View>
			</Modal>

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
	buttonText:{textAlign:'center'},
	infoContainer:{backgroundColor:'#eee'},
	infoRow:{flexDirection:'row', borderBottomWidth:0.5, borderColor:'#ddd',backgroundColor:'#fff',height:32,paddingHorizontal:10,justifyContent:'center',alignItems:'center'},
	infoDivider:{height:10},
	infoTitle:{width:80},
	infoContent:{flex:1}
});
