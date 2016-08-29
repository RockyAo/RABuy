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
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var HomeTopListView = require('../Home/HomeTopListView');
var TopMenu = require('../../LocalData/TopMenu.json');

var HomeTopView = React.createClass({

    getInitialState(){

        return {

            selectedPage: 0
        }
    },

    render() {
        return (

            <View style={styles.container}>
                {/*上部分*/}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={{height:180,width:width}}
                >

                    {this.renderTopView()}
                </ScrollView>

                <HomeTopListView />
                {/*页码部分*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderPageView()}
                </View>
            </View>
        );
    },

    renderTopView(){

        var subViewArray = [];
        var dataArray = TopMenu.data;
        for (var  i = 0;i < dataArray.length;i++){

            subViewArray.push(

               <HomeTopListView
                   key = {i}
                   dataArr = {dataArray[i]}
               />
            )
        }

        return subViewArray;
    },

    //页码指示器
    renderPageView(){

            var indicatorArray = [];

            for (var i = 0;i < 2;i++){

                indicatorArray.push(

                    <Text key={i} style={{
                        fontSize:25,
                        color:(i === this.state.selectedPage) ? 'orange' : 'gray',
                    }}>&bull;</Text>
                )
            }

            return indicatorArray;

    },

    onScrollAnimationEnd(scrollView){

        var currentPage = Math.floor(scrollView.nativeEvent.contentOffset.x / width)

        this.setState({

            selectedPage:currentPage,
        })
    }

});

const styles = StyleSheet.create({
    container: {
        height:190,
        backgroundColor:'white',
        // flexDirection:'row',
        alignItems:'center'
    },

    indicatorViewStyle:{

        flexDirection:'row',
        justifyContent:'center',
        position:'absolute',
        bottom:0,
        backgroundColor:'rgba(0,0,0,0)',
        width:width,
        left:0

    },

});

module.exports = HomeTopView;

