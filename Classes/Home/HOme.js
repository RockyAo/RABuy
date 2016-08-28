
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    StatusBar,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var HomeTopView = require('../Home/HomeTopView');

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    translucent={true}
                    barStyle="light-content"
                    backgroundColor="orange"
                />
                {this.renderNavBar()}
                <ScrollView>
                    <HomeTopView />
                </ScrollView>
            </View>
        );
    },

    renderNavBar(){

        return (

            <View style={styles.navViewStyle}>

                {/*左边*/}
                <TouchableOpacity onPress = {()=>{alert('点击了地理位置选择')}}>
                    <Text style={styles.leftTextStyle}>
                        北京
                    </Text>
                </TouchableOpacity>
                {/*中间*/}
                <TextInput
                    style={styles.navInputStyle}
                    placeholder = '输入商家、商品'
                />
                {/*右边*/}
                <View style={styles.navRightViewStyle}>

                    <TouchableOpacity onPress = {()=>{alert('消息点击')}}>
                        <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {()=>{alert('扫码点击')}}>
                        <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',

    },

    navViewStyle:{
        height:64,
        backgroundColor:'orange',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },

    navInputStyle:{
        marginTop:27,
        width:width*0.7,
        height:30,
        backgroundColor:'white',
        borderRadius:6,
        paddingLeft:5,
        fontSize:15
    },

    navRightImageStyle:{

        width:25,
        height:25,

    },

    leftTextStyle:{

        color:'white',
        marginTop:20

    },

    navRightViewStyle:{
        marginTop:20,
        flexDirection:'row',
        width:60,
        justifyContent:'space-around'
    }
});

module.exports = Home;
