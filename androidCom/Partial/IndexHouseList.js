import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ListView, TouchableHighlight} from 'react-native';
// 使用ListView第一步：引入ListView
import Swiper from 'react-native-swiper';

import HouseMainPage from '../Page/HouseMainPage';

export default class IndexHouseList extends Component {
	constructor(props){
		super(props);

		this.state = {
			// 使用ListView第二步：创建并实例化一个ListView数据源对象
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2}),
			isLoaded: false,
			page:1,
			perPage:4,
			colors: ["#f3541f", "#326ed7", "#653a78", "#34ab55", "#ffbc44", "#039be5", "#009688", "#536dfe", "#ab47bc", "#ab47bc", "#e53935", "#3f51b5"]
		}
	}

	componentDidMount(){
		this.fetchData();
	}

	// 使用ListView第三、四步：定义或获取数据源（数组）并指定给已实例化的ListView对象
	fetchData(){
		var params = '/house?page_size=' + this.state.perPage + '&page=' + this.state.page;
		var requestUrl = this.props.app_info.apiUrl + params;

		fetch(requestUrl)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.data),
					isLoaded: true,
					page: this.state.page + 1
				});
			})
			.done();
	}

	//使用ListView第五步：定义ListView列表条目的渲染样式
	_renderRow(rowData){
		return (
			<TouchableHighlight underlayColor='#eee' onPress={() => this._onPress(rowData)}>
				<View style={styles.houseItem}>
					<Image style={styles.houseItemImg} source={{uri:rowData.house_thumb_src}} />
					<View style={styles.houseItemDesc}>
						<Text style={styles.houseItemTitle}>{rowData.house_name}</Text>
						<Text style={styles.houseItemArea}>{rowData.house_min_area}-{rowData.house_max_area}m</Text>
						<View style={styles.houseItemFeatured}>
						{rowData.house_featured.map((elem, index) => {
							return (
								<View key={index} style={[styles.houseItemFeaturedItem, {borderColor: this.state.colors[index]}]}>
									<Text key={index} style={[styles.houseItemFeaturedText, {color: this.state.colors[index]}]}>{elem}</Text>
								</View>
							);
						})}
						</View>
						<Text style={styles.houseItemAddress}>{rowData.house_address}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}


	//点击跳转
	_onPress(rowData){
		this.props.navigator.push({
			id: 'HouseMain',
			title: '楼盘概要页',
			component: HouseMainPage,
			passProps:{
				navigator: this.props.navigator,
				house_id: rowData.house_id,
			}
		});
	}


	//正在加载时的显示视图
	renderLoadingView(){
		return (
			<View style={styles.container}>
				<Text style={{textAlign:'center'}}>请稍候!正在加载中...</Text>
			</View>
		);
	}


	//使用ListView第六步：将ListView加入渲染视图，指定已定义好的数据源和渲染样式
	render() {
		if(!this.state.isLoaded){
			return this.renderLoadingView();
		}
		return (
			<View style={styles.container}>
				<ListView
					style={{flex:1}}
					dataSource={this.state.dataSource}
					renderRow={this._renderRow.bind(this)} />
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container:{flex:1, justifyContent: 'center'},
	houseItem:{flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:'#e8e8e8'},
	houseItemImg:{width:108,height:82},
	houseItemDesc:{marginLeft:10},
	houseItemTitle:{fontWeight: "600",fontSize:16, color:"#444"},
	houseItemArea:{},
	houseItemAddress:{},
	houseItemFeatured:{flex:1,flexDirection:'row',},
	houseItemFeaturedItem:{marginRight:5, borderWidth:1, height:22,paddingHorizontal:3},
	houseItemFeaturedText:{lineHeight:22}
})
