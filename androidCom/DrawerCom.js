'use strict';
import React, { Component } from 'react';
import {
  DrawerLayoutAndroid,
  Navigator,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


import DrawerMenuCom from './DrawerMenuCom';
import IndexPage from './Page/IndexPage';
import TestPage from './Page/TestPage';
import Slider from './Page/Slider';


export default class DrawerCom extends Component {
  constructor(props){
    super(props);
  }

  openDrawer(){
      this.refs['DRAWER'].openDrawer();
  };

  closeDrawer(){
      this.refs['DRAWER'].closeDrawer();
  }

  goTo(n) {
      nav.push({
          id: n.id,
      });
      this.closeDrawer();
  }

  renderScene(route, nav) {
        switch (route.id){
            case 'Index':
                return (<IndexPage navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'Test':
                return (<TestPage navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'Slider':
                return (<Slider navigator={nav} {...this.props} {...route.passProps} />);
                break;
        }
  	}


  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <DrawerMenuCom />
        <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'Index'})}><Text>Index</Text></TouchableHighlight>
        <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'Test'})}><Text>Test</Text></TouchableHighlight>
        <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'Slider'})}><Text>Slider</Text></TouchableHighlight>
      </View>
    );
    return (
      <DrawerLayoutAndroid
          ref={'DRAWER'}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
          <View style={{flex: 1}}>
            <Navigator
                initialRoute={{id:'Index'}}
                ref={((nav) => { global.nav = nav })}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                      return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
            />
          </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});