import React, { Component } from 'react';
import {StyleSheet,Text,View, ScrollView, Image,Dimensions,TouchableHighlight, TouchableOpacity} from 'react-native';

//import Swiper from 'react-native-swiper';
import ImageSlider from 'react-native-image-slider';



export default class NetWorkImage extends Component{
    render(){
        return (
            <ImageSlider style={{flex:1}} images={this.props.source} />
        );
    }
}


const styles = StyleSheet.create({
    wrapper: { backgroundColor:'#dd3333'},
	slide:{flex:1,justifyContent: 'center'},
    image:{flex:10}
});
