
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView

} from 'react-native';

var CommonNavigationView = require('../Main/CommonNavigationView');
var CommonCell = require('../More/CommonCell');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');


var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                <CommonNavigationView
                    rightImage='icon_mine_setting'
                    navTitle='更多'
                />
                <ScrollView>
                    <View style={{marginTop:10}}>
                        <CommonCell title = '扫一扫'/>
                    </View>

                    <View style={{marginTop:10}}>
                        <CommonCell
                            title = '开启省流量模式'
                            isSwitch={true}
                            touchEnable={false}
                        />
                        <CommonCell title = '消息提醒'/>
                        <CommonCell title = '邀请好友使用'/>
                        <CommonCell title = '清空缓存' detailTitle = '1.25M'/>
                    </View>

                    <View style={{marginTop:10}}>

                        <CommonCell title = '意见反馈'/>
                        <CommonCell title = '问卷调查'/>
                        <CommonCell title = '支付帮助'/>
                        <CommonCell title = '网络诊断'/>
                        <CommonCell title = '关于我们'/>
                        <CommonCell title = '我要应聘'/>
                    </View>
                </ScrollView>
            </View>
        );
    },

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },

    navRightImageStyle:{

        width:25,
        height:25
    },

    navStyle:{

        width:width
    }

});

module.exports = More;

