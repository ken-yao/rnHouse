import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';
import IndexSearchBar from '../Partial/IndexSearchBar';

export default class IndexSlider extends Component {
	constructor(props){
		super(props);

		this.state = {
			sliders: [],
			isLoaded:false,
		}
	}

	componentDidMount(){
		this.fetchData();
	}

	// 获取数据源（数组）
	fetchData(){
		var params = '/house/slider';
		var requestUrl = this.props.app_info.apiUrl + params;

		fetch(requestUrl)
			.then((response) => response.json())
			.then((responseData) => {
				this.setState({
					sliders: responseData.data,
					isLoaded: true,
				});
			})
			.done();
	}

	//正在加载时的显示视图
	renderLoadingView(){
		return (
			<View style={styles.container}>
				<Text style={{textAlign:'center'}}>请稍候!正在加载中...</Text>
			</View>
		);
	}

	render() {
		if(!this.state.isLoaded){
			return this.renderLoadingView();
		}
		return (
			<View style={{position:'absolute'}}>
				<Swiper style={styles.wrapper} height={180} autoplay={true} showsPagination={true} loop={true}>

					{this.state.sliders.map((elem, index) => {
						return (
							<View key={index} style={styles.slide} title={<Text numberOfLines={1}>{elem.house_name}</Text>}>
								<Image style={styles.image} source={{uri: elem.house_slider_src}} />
							</View>
						);
					})}

				</Swiper>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	wrapper: {
		backgroundColor:'#dd3333'
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	text: {
		color: '#000',
		fontSize: 30,
		fontWeight: 'bold',
	},
	image: {
		flex: 1,
	}
})
