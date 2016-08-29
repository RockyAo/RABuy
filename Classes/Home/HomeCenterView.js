/**
 * Created by RockyAo on 16/8/29.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var HomeButton = require('../Home/HomeButton');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var HomeCenterView = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <HomeButton

                        titleString='天天特价'
                        titleStringColor='orange'
                        discribeString='特惠不打烊'
                        discribeStringColor='gray'
                        iconImageName='tttj'
                        viewWidth={width/2.0}
                    />
                </View>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth:10,
        borderTopColor:'#e8e8e8'
    },

});

module.exports = HomeCenterView;
