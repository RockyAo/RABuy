
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Home = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text> 首页</Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

module.exports = Home;
