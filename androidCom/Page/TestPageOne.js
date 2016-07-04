import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Swiper from 'react-native-swiper';

export default class TestPageOne extends Component {
  render() {
    return (
        <View>
        <Swiper style={styles.wrapper} height={240} autoplay={false} showsButtons={false} showsPagination={true} loop={false}>
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
      <View><Text>This is the test page one</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {fontSize: 20,textAlign: 'center', margin: 10,},
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
});