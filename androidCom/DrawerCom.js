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
import HouseMainPage from './Page/HouseMainPage';
import HouseLdPage from './Page/HouseLdPage';
import HouseHxPage from './Page/HouseHxPage';
import HouseDetailPage from './Page/HouseDetailPage';
import HouseAllDetailPage from './Page/HouseAllDetailPage';


import TestPage from './Page/TestPage';
import PageSlider from './Page/PageSlider';
import ImageSlider from './Page/ImageSlider';


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
                return (<IndexPage navigator={nav} {...this.props} {...route.passProps} openDrawer={this.openDrawer.bind(this)} />);
                break;
            case 'HouseMain':
                return (<HouseMainPage navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'HouseLd':
                return (<HouseLdPage navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'HouseHx':
                return (<HouseHxPage navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'HouseDetail':
                return (<HouseDetailPage navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'HouseAllDetail':
                return (<HouseAllDetailPage navigator={nav} {...this.props} {...route.passProps} />);
                break;

            case 'Test':
                return (<TestPage navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'PageSlider':
                return (<PageSlider navigator={nav} {...this.props} {...route.passProps} />);
                break;
            case 'ImageSlider':
                return (<ImageSlider navigator={nav} {...this.props} {...route.passProps} />);
                break;
        }
  	}


  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <DrawerMenuCom />
        <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'Index'})}><Text style={styles.testLink}>Index</Text></TouchableHighlight>
        <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'Test'})}><Text style={styles.testLink}>Test</Text></TouchableHighlight>
        <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'PageSlider'})}><Text style={styles.testLink}>PageSlider</Text></TouchableHighlight>
        <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id: 'ImageSlider'})}><Text style={styles.testLink}>ImageSlider</Text></TouchableHighlight>
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
  },
  testLink:{
    fontSize:14,
    padding:10
  }
});
