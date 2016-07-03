import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class IndexFeaturedScroll extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					style={styles.scrollViewContainer}
					contentContainerStyle={styles.contentContainer}
					horizontal={true} showsHorizontalScrollIndicator={false}>
						<View style={styles.box}>
							<Image style={styles.featuredImage} source={require('../../img/featured/d1.jpg')} />
							<Text style={styles.featuredTitle}>近地铁</Text>
						</View>
						<View style={styles.box}>
							<Image style={styles.featuredImage} source={require('../../img/featured/d2.jpg')} />
							<Text style={styles.featuredTitle}>花园房</Text>
						</View>
						<View style={styles.box}>
							<Image style={styles.featuredImage} source={require('../../img/featured/d3.jpg')} />
							<Text style={styles.featuredTitle}>现代感</Text>
						</View>
						<View style={styles.box}>
							<Image style={styles.featuredImage} source={require('../../img/featured/d4.jpg')} />
							<Text style={styles.featuredTitle}>性价比</Text>
						</View>
						<View style={styles.box}>
							<Image style={styles.featuredImage} source={require('../../img/featured/d5.jpg')} />
							<Text style={styles.featuredTitle}>舒适洋房</Text>
						</View>
						<View style={styles.box}>
							<Image style={styles.featuredImage} source={require('../../img/featured/d6.jpg')} />
							<Text style={styles.featuredTitle}>高端豪华</Text>
						</View>
				</ScrollView>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container:{marginHorizontal:5, marginVertical:10, height:90},
	scrollViewContainer:{flex:1, height:90},
	contentContainer:{height:90},
	box:{position:'relative',width:150,height:90,backgroundColor:'#dd3333',marginHorizontal:5,justifyContent:'center', alignItems:'center'},
	featuredImage:{width:150,height:90,position:'absolute',left:0,top:0},
	featuredTitle:{fontSize:22,color:'#fff'},
});
