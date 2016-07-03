import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class IndexTabBar extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.tabItem}>
					<Image style={styles.tabImage} source={require('../../img/tabmenu/m1.png')} />
					<Text style={styles.tabTitle}>楼盘</Text>
				</View>
				<View style={styles.tabItem}>
					<Image style={styles.tabImage} source={require('../../img/tabmenu/m2.png')} />
					<Text style={styles.tabTitle}>叫车</Text>
				</View>
				<View style={styles.tabItem}>
					<Image style={styles.tabImage} source={require('../../img/tabmenu/m3.png')} />
					<Text style={styles.tabTitle}>关注</Text>
				</View>
				<View style={styles.tabItem}>
					<Image style={styles.tabImage} source={require('../../img/tabmenu/m4.png')} />
					<Text style={styles.tabTitle}>消息</Text>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container:{backgroundColor:'#000',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:44},
	tabItem:{flex:1,height:44,justifyContent:'center',alignItems:'center' },
	tabImage:{width:20,height:20},
	tabTitle:{color:'#fff',fontSize:12}
});
