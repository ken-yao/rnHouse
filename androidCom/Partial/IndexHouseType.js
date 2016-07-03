import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default class IndexHouseType extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.houseType}>
					<View style={[styles.houseTypeImageContainer, {backgroundColor:'#f3541f'}]}>
						<Image style={styles.houseTypeImage} source={require('../../img/houseIcon/s1.png')} />
					</View>
					<Text style={styles.houseTypeTitle}>洋房</Text>
				</View>
				<View style={styles.houseType}>
					<View style={[styles.houseTypeImageContainer, {backgroundColor:'#326ed7'}]}>
						<Image style={styles.houseTypeImage} source={require('../../img/houseIcon/s2.png')} />
					</View>
					<Text style={styles.houseTypeTitle}>公寓</Text>
				</View>
				<View style={styles.houseType}>
					<View style={[styles.houseTypeImageContainer, {backgroundColor:'#653a78'}]}>
						<Image style={styles.houseTypeImage} source={require('../../img/houseIcon/s3.png')} />
					</View>
					<Text style={styles.houseTypeTitle}>写字楼</Text>
				</View>
				<View style={styles.houseType}>
					<View style={[styles.houseTypeImageContainer, {backgroundColor:'#34ab55'}]}>
						<Image style={styles.houseTypeImage} source={require('../../img/houseIcon/s4.png')} />
					</View>
					<Text style={styles.houseTypeTitle}>商铺</Text>
				</View>
				<View style={styles.houseType}>
					<View style={[styles.houseTypeImageContainer, {backgroundColor:'#ffbc44'}]}>
						<Image style={styles.houseTypeImage} source={require('../../img/houseIcon/s5.png')} />
					</View>
					<Text style={styles.houseTypeTitle}>别墅</Text>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container:{flexDirection:'row',margin:10,marginTop:20,justifyContent:'space-between',alignItems:'center',height:60},
	houseType:{flex:1,height:60,justifyContent:'center',alignItems:'center' },
	houseTypeImageContainer:{flex:1,width:60,height:60,justifyContent:'center',alignItems:'center',borderRadius:60},
	houseTypeImage:{width:32,height:32},
	houseTypeTitle:{color:'#444',marginTop:4}
});
