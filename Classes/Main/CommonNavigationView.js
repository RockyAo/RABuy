

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
} from 'react-native';

var CommonNavigationView = React.createClass({

    props: {

        navTitle: string,
        leftImage:uri,
        rightImage:uri,
    },

    render() {
        return (

            <View style={styles.container}>
                <Image source={this.props.leftImage} style={styles.leftImageStyle}/>
                <Text style={styles.titleTextStyle}>{this.props.navTitle}</Text>
                <Image source={this.props.rightImage} style={styles.rightImageStyle}/>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        height:Platform.OS === 'ios' ? 64 : 44 ,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    leftImageStyle:{


    },

    rightImageStyle:{


    },

    titleTextStyle:{


    },

});

module.exports = CommonNavigationView;

