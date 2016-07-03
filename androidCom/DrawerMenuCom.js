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
            <Image style={styles.img} source={{uri: 'http://app.anjia0769.com/public/img/tx.jpg'}} />
            <View style={styles.headText}>
              <Text style={styles.headTxt}>波西</Text>
              <Text style={styles.headTxt}>185****5126</Text>
            </View>
          </View>

          <View style={styles.headImg}>
          <Icon name="ios-arrow-forward" size={32} color="#666" />
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
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {backgroundColor:'#f8f8f8',flex: 1,backgroundColor: '#F5FCFF'},
  headContainer:{marginTop:15,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'},
  headLeft:{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'},
  img:{marginLeft:12,borderRadius: 60,width: 60, height: 60},
  headText:{marginLeft: 10},
  headTxt:{fontSize:16},
  headImg:{marginRight:15},
  menuList:{marginTop:30},
  divider:{borderTopWidth:1},
  menuItem:{flex:1,flexDirection:'row',alignItems:'center',height:50,borderBottomWidth:1,borderColor:'#ccc',paddingLeft:15,backgroundColor:'#fff'},
  menuText:{flex:1,justifyContent:'center'}
});
