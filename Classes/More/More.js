
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';

var More = React.createClass({
    render() {
        return (
            <View style={styles.container}>

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

                <Image source={{uri:'icon_mine_setting'}} style={styles.navRightImageStyle}/>

            </View>
        )
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    navRightImageStyle:{

        width:25,
        height:25
    }

});

module.exports = More;

