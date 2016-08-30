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
            viewWidth:0,
            //下级页面的url
            nextUrl:'',
            //回调函数
            homeButtonClickCallBack:null
        }
    },


    render() {
        return (

            <TouchableOpacity onPress={()=>{this.buttonClick(this.props.nextUrl)}}>

                <View style={[styles.container,{width:this.props.viewWidth}]}>
                    <View style={{

                        marginLeft:10,
                        justifyContent:'space-around',
                        alignItems:'center',
                        backgroundColor:'white'

                    }}>
                        <Text style={{
                            color:this.props.titleStringColor,
                            fontSize:18
                        }}>{this.props.titleString}</Text>

                        <Text style={{
                            color:this.props.discribeStringColor,
                            marginTop:10,
                            fontSize:13
                        }}>{this.props.discribeString}</Text>
                    </View>
                    <View style={{

                        alignItems:'center',
                        marginRight:10,
                        backgroundColor:'white'
                    }}>
                        <Image source={{uri:this.props.iconImageName}} style={{width:117/2.0,height:85/2.0,resizeMode:'contain'}}/>
                    </View>

                </View>
            </TouchableOpacity>
        );
    },


    buttonClick(data){

        if (this.props.homeButtonClickCallBack == null) return;

        this.props.homeButtonClickCallBack(data)
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
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        borderLeftColor:'#dddddd',
        borderLeftWidth:1,
        borderRightColor:'#dddddd',
        borderRightWidth:1

    },

});

module.exports = HomeButton;
