

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Shop = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                <Text>商家</Text>
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

module.exports = Shop;
