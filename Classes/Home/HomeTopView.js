/**
 * Created by RockyAo on 16/8/28.
 */
/**
 * Created by ZCBL on 16/8/25.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';

var HomeTopView = React.createClass({

    getInitialState(){

        return {

            selectedPage: 0
        }
    },

    render() {
        return (

            <View>

                {/*上部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                >

                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>

                    {this.renderPageView()}
                </View>
            </View>
        );
    },

    //页码指示器
    renderPageView(){

            var indicatorArray = [], style;

            for (var i = 0;i < 2;i++){

                indicatorArray.push(

                    style = (i === this.state.selectedPage) ? {color:'orange'} : {color:'gray'},

                    <Text key={i} style={[{fontSize:17},style]}>&bull;</Text>
                )
            }

            return indicatorArray;

    },

});

const styles = StyleSheet.create({
    container: {
        height:44,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center'
    },

    indicatorViewStyle:{


        flexDirection:'row',
        justifyContent:'center',
    },

});

module.exports = HomeTopView;

