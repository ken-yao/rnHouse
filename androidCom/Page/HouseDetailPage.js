import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity} from 'react-native';

import HouseDetailTopBar from '../Partial/HouseDetailTopBar';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';


var {width, height} = Dimensions.get('window');

export default class HouseDetailPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			house_id: this.props.house_id,
			isLoaded: false
		};
	}

	componentDidMount(){
        console.log(this.props)
    }

	render() {
		return (
			<View style={{flex:1, backgroundColor:'#f8f8f8'}}>
                <View style={styles.topBar}>
                    <HouseDetailTopBar navigator={this.props.navigator} house_name={this.props.house_name} house_average_price={this.props.house_average_price} />
                </View>
                <ScrollView>
                    <Swiper style={styles.wrapper} height={320} autoplay={false} showsButtons={false} showsPagination={true} loop={false}>
                        {this.props.ybj.map((elem, index) => {
                            return (
                                <View key={index} style={styles.slide}>
                                    <Image style={styles.image} source={{uri: elem}} />
                                </View>
                            );
                        })}
                    </Swiper>
                    <View style={styles.descContainer}>
                        <Text style={{fontSize:22,color:'#222'}}>￥{this.props.house_average_price}元</Text>
                        <Text style={styles.descText}>楼盘地址：{this.props.house_address}</Text>
                        <Text style={styles.descText}>最新开盘：{this.props.house_newest_open_time}</Text>
                        <Text style={styles.descText}>交楼时间：{this.props.house_handing_time}</Text>
                        <View style={{flex:1,flexDirection:'row',height:24,alignItems:'center'}}>
                            <Text>所有户型：</Text>
                            {this.props.house_apartment_styles.map((elem, i) => {
                                return (
                                    <View key={i} style={[styles.itemContainer, styles.hxItem]}><Text>{elem}</Text></View>
                                );
                            })}
                        </View>
                        <View style={{flex:1,flexDirection:'row',height:24,alignItems:'center'}}>
                            <Text>户型特色：</Text>
                            {this.props.house_featured.map((ft, i) => {
                                return (
                                    <View key={i} style={[styles.itemContainer, styles.ftItem]}><Text>{ft}</Text></View>
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={[styles.button,{marginRight:1}]}><Text style={styles.buttonText}>免费预约,得优惠</Text></TouchableHighlight>
                </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	topBar:{height:44},
	buttonContainer:{width:Dimensions.get('window').width,flexDirection: 'row',padding:10,justifyContent:'center',height:45},
	button:{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'#fec900',height:45},
	buttonText:{textAlign:'center'},
	slide:{flex:1,justifyContent: 'center',backgroundColor: 'transparent'},
	image:{flex:1},
	descContainer:{padding:16, paddingBottom:0},
	itemContainer:{borderWidth:0.8,marginRight:8,paddingHorizontal: 4, justifyContent:'center',alignItems:'center',borderRadius:2},
	hxItem:{borderColor:'#c88a14'},
	ftItem:{borderColor:'#dd3333'},
	descText:{lineHeight:24}
});
