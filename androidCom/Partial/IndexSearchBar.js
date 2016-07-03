import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class IndexSearchBar extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.props.openDrawer.bind(this)}>
					<View style={styles.headImgContainer}>
						<Icon name="ios-person-outline" size={24} color="#666" />
					</View>
				</TouchableOpacity>
				<Text style={styles.searchArea}>东莞</Text>
				<TextInput style={styles.searchInput} placeholder="请输入搜索楼盘名称" />
				<View style={styles.searchContainer}>
					<Icon name="ios-search" size={24} color="#666" />
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container:{backgroundColor:'#f8f8f8',flexDirection:'row',margin:20,justifyContent:'space-between',alignItems:'center',height:40,borderRadius:4},
	headImgContainer:{justifyContent:'center',alignItems:'center',marginLeft:8,width:27,height:27,borderWidth:1,borderColor:'#666',borderRadius:30},
	searchArea:{marginLeft:8, marginRight:6,fontSize:16,color:'#444'},
	searchInput:{flex:1,borderWidth:0,borderColor:'#f8f8f8',height:64},
	searchContainer:{marginRight:10},
});
