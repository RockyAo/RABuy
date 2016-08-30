/**
 * Created by RockyAo on 16/8/30.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

var DetailWebview = React.createClass({

    getInitialState(){

        return{

            detailUrl:this.props.url
        }

    },

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    source={{uri:'http://www.baidu.com'}}
                    automaticallyAdjustContentInsets={true}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },

});

module.exports = DetailWebview;
