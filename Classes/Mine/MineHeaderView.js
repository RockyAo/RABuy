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
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
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
                {this.creatInfoBar()}
            </View>
        );
    },

    creatInfoBar(){

        return(

            <View style={{

                position:'absolute',
                left:0,
                bottom:0,
                flexDirection:'row',
                width:width
            }}>
                {this.getAllInfoBar()}
            </View>
        )
    },

    getAllInfoBar(){

        var data = [{number:'10',name:'优惠券'},{number:'20',name:'评价'},{number:'100',name:'收藏'}];

        var itemArray = [];

        for (var  i = 0; i < data.length;i++){

            var item = data[i];

            itemArray.push(

                <View key = {i} style={{

                    width:width/3,

                    alignItems:'center',
                    backgroundColor:'rgba(243,243,243,0.4)',
                    height:44,
                    justifyContent:'center',
                    borderRightColor:'white',
                    borderRightWidth:0.5
                }}>
                    <Text style={styles.wordStyle}>{item.name}</Text>
                    <Text style={styles.wordStyle}>{item.number}</Text>

                </View>
            )
        }

        return itemArray
    }



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

    wordStyle:{

        color:'white',
    }

});

module.exports = MineHeaderView;

