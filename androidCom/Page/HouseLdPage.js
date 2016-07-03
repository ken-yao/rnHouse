import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity} from 'react-native';

import HouseTopBar from '../Partial/HouseTopBar';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HouseLdPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			width:Dimensions.get('window').width,
			height:Dimensions.get('window').height,
			houseInfo: this.props.houseInfo,
			isLoaded: false,
			house_description:[],
			house_apartment_styles:[]
		};
	}

	render() {
		return (
			<ScrollView style={{flex:1,height:Dimensions.get('window').height}}>
				<View>
					<View style={styles.mainImageContainer}>
						<Image style={styles.houseMainImage} source={{uri: this.state.houseInfo.house_distribution_image_source_url}} />
					</View>
					<View style={styles.topBar}>
						<HouseTopBar navigator={this.props.navigator} house_name={this.state.houseInfo.house_name} house_average_price={this.state.houseInfo.house_average_price} />
					</View>
				</View>
				<View style={{width:Dimensions.get('window').width, height: Dimensions.get('window').height * 11/20 - 25}}>
					<View style={{flex:1}}>
						<View style={styles.houseDescContainer}>
							<Text>ddd</Text>
							<Text>ddd</Text>
							<Text>ddd</Text>
							<Text>ddd</Text>
						</View>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableHighlight style={[styles.button,{marginRight:1}]}><Text style={styles.buttonText}>免费预约,得优惠</Text></TouchableHighlight>
						<TouchableHighlight style={[styles.button,{marginLeft:1}]}><Text style={styles.buttonText}>查看楼盘详情</Text></TouchableHighlight>
					</View>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	topBar:{width:Dimensions.get('window').width,position:'absolute',top:0,left:0},
	mainImageContainer:{width:Dimensions.get('window').width,height:Dimensions.get('window').height * 9/20},
	houseMainImage:{width:Dimensions.get('window').width,height:Dimensions.get('window').height * 9/20},
	houseDescContainer:{flex:1, margin:20},
	houseFeaturedContainer:{flexDirection:'row'},
	houseInfoContainer:{flex:1,marginTop:16,},
	houseInfoRow:{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:0.5,borderColor:'#fff'},
	houseInfoHxRow:{flex:1,flexDirection:'row',alignItems:'center',borderBottomWidth:0.5,borderColor:'#fff'},
	houseInfoText:{color:'#fff',fontSize:16,lineHeight:24},
	houseDescItem:{borderWidth:1,borderColor:'#fff',borderRadius:2,paddingVertical:2,paddingHorizontal:4,marginRight:8,},
	houseDescItemText:{color:'#fff',fontSize:16},
	buttonContainer:{width:Dimensions.get('window').width,position:'absolute', bottom:0, left:0, flexDirection: 'row',justifyContent:'center',height:45},
	button:{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fec900',height:45},
	buttonText:{textAlign:'center'}
});