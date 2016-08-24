

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native';

var CommonNavigationView = React.createClass({

    props: {

        navTitle:String,
        leftImage:String,
        rightImage:String,
    },

    render() {
        return (

            <View style={styles.container}>
                <Image source={{uri:this.props.leftImage}} style={styles.imageStyle}/>
                <Text style={styles.titleTextStyle}>{this.props.navTitle}</Text>
                <Image source={{uri:this.props.rightImage}} style={styles.imageStyle}/>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        height:Platform.OS === 'ios' ? 64 : 44 ,
        backgroundColor:'orange',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-around'
    },

    imageStyle:{

        width:25,
        height:25,
    },

    titleTextStyle:{

        color:'white',
        fontSize:18
    },

});

module.exports = CommonNavigationView;

