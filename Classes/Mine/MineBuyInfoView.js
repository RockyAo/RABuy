/**
 * Created by Administrator on 2016/8/25 0025.
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

var MineBuyInfoView = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {this.creatSmallButton('order1','待付款')}
                {this.creatSmallButton('order2','待使用')}
                {this.creatSmallButton('order3','待评价')}
                {this.creatSmallButton('order4','退款/售后')}
            </View>
        );
    },

    creatSmallButton(imageName,title){

       return(
        <TouchableOpacity onPress={()=>{alert('点击了'+title)}}>

            <View style={{

                alignItems:'center',
                justifyContent:'space-between',
                marginLeft:30,
                marginRight:30,

            }}>
                <Image source={{uri:imageName}} style={{width:30,height:20}}/>
                <Text style={{marginTop:5}}>{title}</Text>
            </View>
        </TouchableOpacity>

       );
    },

});

const styles = StyleSheet.create({
    container: {
        height:70,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.25,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },


});

module.exports = MineBuyInfoView;

