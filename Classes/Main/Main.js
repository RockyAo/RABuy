/**
 * Created by ZCBL on 16/8/22.
 */
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
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

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
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_homepage'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_homepage_selected'}} style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({ selectedTab: 'home' })}
                >
                    <Home/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="商家"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_merchant_normal'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_merchant_selected'}} style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => this.setState({ selectedTab: 'shop' })}
                >
                    <Shop/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_mine'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_mine_selected'}} style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({ selectedTab: 'mine' })}
                >
                    <Mine/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="更多"
                    renderIcon={() => <Image source={{uri:'icon_tabbar_misc'}} style={styles.tabbarIconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri:'icon_tabbar_misc_selected'}} style={styles.tabbarIconStyle}/>}
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => this.setState({ selectedTab: 'more' })}
                >
                    <More/>
                </TabNavigator.Item>


            </TabNavigator>

        );
    }

});


const styles = StyleSheet.create({


    tabbarIconStyle:{

        width:30,
        height:30
    }

});

module.exports =  Main;
