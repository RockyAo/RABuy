
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image

} from 'react-native';

var Dimensions = require('Dimensions')
var {width,height} = Dimensions.get('window')

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}
            </View>
        );
    },

    renderNavBar(){

        return (

            <View style={styles.navViewStyle}>

                {/*左边*/}
                <Text style={styles.leftTextStyle}>
                    北京
                </Text>
                {/*中间*/}
                <TextInput

                />
                {/*右边*/}
                <View style={{flexDirection:'row'}}>
                    <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                    <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImageStyle}/>
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
    },

    navInputStyle:{

        width:width*0.6,
        height:40
    },

    navRightImageStyle:{
        marginTop:20,
        width:30,
        height:30
    },

    leftTextStyle:{

        color:'white',
        marginTop:20

    }
});

module.exports = Home;
