

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

var MineCell = require('../Mine/MineCell');
var MineBuyInfoView = require('../Mine/MineBuyInfoView');
var MineHeaderView = require('../Mine/MineHeaderView');

var Mine = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View>
                        <MineHeaderView />
                        <MineCell title="我的订单" leftImageName="collect" discribeTitle="查看全部订单"/>
                        <MineBuyInfoView />
                    </View>
                    <View style={styles.marginStyle}>
                        <MineCell title="钱包" leftImageName="draft" discribeTitle="账户余额:0.01元"/>
                        <MineCell title="抵用券" leftImageName="like" discribeTitle="0"/>
                    </View>
                    <View style={styles.marginStyle}>
                        <MineCell title="积分商城" leftImageName="card"/>
                    </View>
                    <View style={styles.marginStyle}>
                        <MineCell title="今日推荐" leftImageName="new_friend" needNewImage={true}/>
                    </View>
                    <View style={styles.marginStyle}>
                        <MineCell title="我要合作" leftImageName="pay" discribeTitle="轻松开店"/>
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

    marginStyle:{

        marginTop:10,
    }


});

module.exports = Mine;

