
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');


var CommonNavigationView = require('../Main/CommonNavigationView');

var Main = React.createClass({

    getInitialState(){

        return{

            selectedTab:'home'
        }
    },

    render() {

        return (

            <TabNavigator>
                {/*首页*/}
                {this.creatTabbarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {/*商家*/}
                {this.creatTabbarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/*我的*/}
                {this.creatTabbarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/*更多*/}
                {this.creatTabbarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
            </TabNavigator>

        );
    },

    //创建tabbarItem
    creatTabbarItem(title,iconName,selectedIconName,selectedTab,componentName,component){

        return(

            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.tabbarIconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selectedIconName}} style={styles.tabbarIconStyle}/>}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab })}
                selectedTitleStyle = {styles.tabbarItemSelectedWordStyle}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={ ()=>{

                        return Navigator.SceneConfigs.PushFromRight
                    }}

                    renderScene={(route,navigator) => {

                        let Component = route.component;
                        return <Component {...route.passProps} navigator = {navigator}/>
                    }}

                    sceneStyle={

                        <CommonNavigationView

                            leftImage="navigationbar_arrow_up"

                        />
                    }

                />

            </TabNavigator.Item>
        )
    }

});


const styles = StyleSheet.create({


    tabbarIconStyle:{

        width: Platform.os === 'ios' ? 30 : 25,
        height:Platform.os === 'ios' ? 30 : 25
    },

    tabbarItemSelectedWordStyle:{

        color:'orange',
    }

});

module.exports =  Main;
