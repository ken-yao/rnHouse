import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';

export default class ImageSlider extends Component {
  render() {
    return (
      <View>
      <Swiper style={styles.wrapper} height={240} autoplay={true} showsButtons={true} showsPagination={true}
        onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
        dot={<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        paginationStyle={{
          bottom: 0, left: null, right: 10,
        }} loop={true}>
        <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
          <Image style={styles.image} source={{uri: 'http://c.hiphotos.baidu.com/image/w%3D310/sign=0dff10a81c30e924cfa49a307c096e66/7acb0a46f21fbe096194ceb468600c338644ad43.jpg'}} />
        </View>
        <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
          <Image style={styles.image} source={{uri: 'http://a.hiphotos.baidu.com/image/w%3D310/sign=4459912736a85edffa8cf822795509d8/bba1cd11728b4710417a05bbc1cec3fdfc032374.jpg'}} />
        </View>
        <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
          <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=9a8b4d497ed98d1076d40a30113eb807/0823dd54564e9258655f5d5b9e82d158ccbf4e18.jpg'}} />
        </View>
        <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
          <Image style={styles.image} source={{uri: 'http://e.hiphotos.baidu.com/image/w%3D310/sign=2da0245f79ec54e741ec1c1f89399bfd/9d82d158ccbf6c818c958589be3eb13533fa4034.jpg'}} />
        </View>
      </Swiper>
      <View><Text>这是一个测试</Text></View>
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
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
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
