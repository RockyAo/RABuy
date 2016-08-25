/**
 * Created by Administrator on 2016/8/25 0025.
 */

/**
 * Created by Administrator on 2016/8/25 0025.
 */



/**
 * Created by ZCBL on 16/8/25.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var MineHeaderView = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <View style={{

                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Image source={{uri:'kd'}} style={{
                        width:52,
                        height:52,
                        borderRadius:26,
                        borderWidth:1,
                        borderColor:'white',
                        marginLeft:20
                    }}/>
                    <Text style={{color:'white', marginLeft:10}}>哈哈哈哈</Text>
                    <Image source={{uri:'avatar_enterprise_vip'}} style={{width: 26,height: 26,marginLeft: 5}}/>
                </View>
                <View>
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:10}}/>
                </View>
            </View>
        );
    },


});

const styles = StyleSheet.create({
    container: {
        height:160,
        backgroundColor:'orange',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.25,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },


});

module.exports = MineHeaderView;

