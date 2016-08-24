
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';

var CommonNavigationView = require('../Main/CommonNavigationView')
var Dimensions = require('Dimensions')
var {width,height} = Dimensions.get('window')
var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>

                <CommonNavigationView
                    rightImage='icon_mine_setting'
                    navTitle='更多'
                />


                {this.renderNavBar()}
                <Text>更多</Text>

            </View>
        );
    },

    renderNavBar(){

        return (

            <View>

                <Text>
                    更多
                </Text>

                <Image source={{uri:'icon_mine_setting'}} style={styles.navRightImageStyle} style={styles.navStyle}/>

            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    navRightImageStyle:{

        width:25,
        height:25
    },

    navStyle:{

        width:width
    }

});

module.exports = More;

