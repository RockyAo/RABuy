/**
 * Created by RockyAo on 16/8/29.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

var HomeButton = React.createClass({

    getDefaultProps(){

        return{
            //标题
            titleString:'',
            //标题颜色
            titleStringColor:'',
            //小标题
            discribeString:'',
            //小标题文字颜色
            discribeStringColor:'',
            //图片名称
            iconImageName:'none',
            //窗口宽度
            viewWidth:0
        }
    },


    render() {
        return (
            <View style={[styles.container,{width:this.props.viewWidth}]}>
                <View style={{

                    marginLeft:10,
                    justifyContent:'space-around',
                    backgroundColor:'red',

                }}>
                    <Text style={{
                        color:this.props.titleStringColor,
                    }}>{this.props.titleString}</Text>
                    <Text style={{

                        color:this.props.discribeStringColor,
                        marginTop:10
                    }}>{this.props.discribeString}</Text>
                </View>
                <View style={{

                    alignItems:'center',
                    marginRight:10
                }}>
                    <Image source={{uri:this.props.iconImageName}} style={{width:117/2.0,height:85/2.0}}/>
                </View>

            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row',
        height:70,
        borderTopColor:'#d8d8d8',
        borderTopWidth:0.5,
        borderLeftColor:'#d8d8d8',
        borderLeftWidth:0.5,
        borderRightColor:'#d8d8d8',
        borderRightWidth:0.5
        // width:this.props.viewWidth
    },

});

module.exports = HomeButton;
