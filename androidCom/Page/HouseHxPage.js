import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity} from 'react-native';

import HouseDetailTopBar from '../Partial/HouseDetailTopBar';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

export default class HouseHxPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			width:Dimensions.get('window').width,
			height:Dimensions.get('window').height,
			house_id: this.props.house_id,
			isLoaded: false,
			currentLdId: 0
		};
	}



	render() {
		return (
			<View style={{flex:1, backgroundColor:'#f8f8f8'}}>
                <View style={styles.topBar}>
                    <HouseDetailTopBar navigator={this.props.navigator} house_name={this.props.house_name} house_average_price={this.props.house_average_price} />
                </View>
                <ScrollView>
                    <View style={{flex:1,padding:10,justifyContent:'center',alignItems:'center'}}>
                    <Swiper autoplay={false} width={Dimensions.get('window').width} height={Dimensions.get('window').height - 136} showsPagination={true} loop={false} >
                        {this.props.apartments.map((apartment, index) => {
                            return (
                                <View key={index} style={styles.slide}>
                                    <Image style={{ width: Dimensions.get('window').width, height:Dimensions.get('window').height * 2/5}} resizeMode='contain' source={{uri: apartment.image}} />

                                    <View style={{backgroundColor:'#fff',width:Dimensions.get('window').width*0.75,height:150,justifyContent:'center',marginTop:20,alignItems:'flex-start',padding:10,borderRadius:6}}>
                                        <Text style={styles.descText}>户型：{apartment.apartment_title}</Text>
                                        <Text style={styles.descText}>面积：{apartment.apartment_area} m</Text>
                                        <Text style={styles.descText}>售价：{apartment.apartment_price}</Text>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={styles.hxFeatured}><Text>{apartment.apartment_featured_one}</Text></View>
                                            <View style={styles.hxFeatured}><Text>{apartment.apartment_featured_two}</Text></View>
                                            <View style={styles.hxFeatured}><Text>{apartment.apartment_featured_three}</Text></View>
                                        </View>
                                    </View>
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
	buttonContainer:{width:Dimensions.get('window').width,flexDirection: 'row',justifyContent:'center',height:45},
	button:{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fec900',height:45},
	buttonText:{textAlign:'center'},
	slide:{flex:1,padding:10,justifyContent: 'center',alignItems:'center'},
	hxFeatured:{borderWidth:1,borderColor:'#edb852',marginRight:8,paddingHorizontal: 4, justifyContent:'flex-start',alignItems:'flex-start'},
	descText:{fontSize:16,lineHeight:32}
});
