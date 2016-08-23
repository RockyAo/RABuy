
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Text>更多</Text>
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

module.exports = More;

