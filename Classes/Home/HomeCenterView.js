/**
 * Created by RockyAo on 16/8/29.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var HomeButton = require('../Home/HomeButton');
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');


var HomeCenterView = React.createClass({

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

                    {this.renderLeftView()}

                    <View>
                        <HomeButton

                            titleString='天天特价'
                            titleStringColor='orange'
                            discribeString='特惠不打烊'
                            discribeStringColor='gray'
                            iconImageName='tttj'
                            viewWidth={width/2.0}
                        />
                        <HomeButton

                            titleString='一元吃'
                            titleStringColor='orange'
                            discribeString='一元吃美食'
                            discribeStringColor='gray'
                            iconImageName='yyms'
                            viewWidth={width/2.0}
                        />
                    </View>
                </View>

            </View>
        );
    },

    renderLeftView(){
        return(
            //<TouchableOpacity onPress={()=>{alert('名店抢购')}}>
                <View style={{

                    justifyContent:'center',
                    alignItems:'center',
                    width:width/2.0
                }}>

                    <Image source={{uri:'mdqg'}} style={{width:156/2.0,height:25}}/>
                    <Image source={{uri:'nsj'}} style={{width:310/2.0,height:127/2.0}}/>
                    <Text style={{color:'#d8d8d8'}}>无敌烤鱼</Text>
                    <View style={{

                        flexDirection:'row',
                        marginTop:5
                    }}>

                        <Text style={{fontSize:10,color:'blue'}}>$9.0</Text>
                        <Text style={{fontSize:12,color:'orange',backgroundColor:'yellow'}}>再减三</Text>
                    </View>
                </View>
            // </TouchableOpacity>
        )
    },


});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth:10,
        borderTopColor:'#e8e8e8',
        flexDirection:'row'
    },

});

module.exports = HomeCenterView;
