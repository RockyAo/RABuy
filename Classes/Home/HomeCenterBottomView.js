/**
 * Created by RockyAo on 16/8/30.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';


var HomeButton = require('../Home/HomeButton');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
var HomeCenterBottomData = require('../../LocalData/XMG_Home_D4.json');

var HomeCenterBottomView = React.createClass({

    getDefaultProps(){

        return{

           buttonClickCallBack:null
        }
    },

    render() {
        return (
            <View style={styles.mainViewStyle}>

                {/*topView*/}
                    <View>

                    </View>
                {/*bottomView*/}
                    <View style={styles.bottomViewStyle}>
                        {this.renderBottomItem()}

                    </View>
            </View>
        );
    },


    renderBottomItem(){

        var itemArray = [];

        var dataArray = HomeCenterBottomData.data;

        for (var i = 0; i < dataArray.length; i++){

            itemData = dataArray[i];

            itemArray.push(

                <HomeButton

                    titleString={itemData.maintitle}
                    titleStringColor={itemData.typeface_color}
                    discribeString={itemData.deputytitle}
                    discribeStringColor='gray'
                    iconImageName={this.dealImageURL(itemData.imageurl)}
                    viewWidth={width/2.0}
                    key={i}
                    nextUrl={itemData.tplurl}
                    homeButtonClickCallBack={(data) => {this.homeButtonDidClick(data)}}
                />
            )
        }

        return itemArray;
    },



    dealImageURL(url){

        if (url.search('w.h') === -1){
            return url;
        }else {

            return url.replace('w.h','120.90');
        }
    },

    homeButtonDidClick(data){

        if (this.props.buttonClickCallBack == null) return;

        this.props.buttonClickCallBack(data);
    }



});

const styles = StyleSheet.create({
    mainViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: width,
        borderTopColor:'#d8d8d8',
        borderTopWidth:10
    },

    bottomViewStyle:{

        flexDirection:'row',
        flexWrap:'wrap',
        height:70
    }

});

module.exports = HomeCenterBottomView;
