import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class DrawerMenuCom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <View style={styles.headLeft}>
            <Image style={styles.img} source={{uri: 'http://app.anjia0769.com/public/img/tx.jpg'}}
                 style={{width: 60, height: 60}} />
            <View style={styles.headText}>
              <Text>波西</Text>
              <Text>185****5126</Text>
            </View>
          </View>

          <View style={styles.headImg}>
            <Image source={require('../img/arrow.jpg')} />
          </View>
        </View>

        <View style={styles.menuList}>

          <TouchableHighlight style={[styles.menuItem, {borderTopWidth:1,marginBottom:10}]}>
            <Text style={styles.menuText}>分享推荐</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.menuItem, styles.divider]}>
            <Text style={styles.menuText}>购房计算器</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.menuItem}>
            <Text style={styles.menuText}>我的反馈</Text>
          </TouchableHighlight>

          <TouchableHighlight style={[styles.menuItem, styles.divider, {marginTop:10}]}>
            <Text style={styles.menuText}>用户指南</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.menuItem}>
            <Text style={styles.menuText}>关于我们</Text>
          </TouchableHighlight>
            <Icon name="ios-person" size={30} color="#4F8EF7" />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f8f8f8',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headContainer:{
    marginTop:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headLeft:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img:{
    borderRadius: 60
  },
  headText:{
    marginLeft: 10
  },
  headImg:{marginRight:15},
  menuList:{marginTop:30},
  divider:{borderTopWidth:1},
  menuItem:{flex:1,flexDirection:'row',alignItems:'center',height:40,borderBottomWidth:1,borderColor:'#ccc',paddingLeft:15,backgroundColor:'#fff'},
  menuText:{flex:1,justifyContent:'center'}

});
