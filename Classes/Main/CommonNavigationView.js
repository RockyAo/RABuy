

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

var CommonNavigationView = React.createClass({

    getDefaultProps(){

        return{

            navTitle:'',
            leftImage:'',
            rightImage:'',
        }
    },

    render() {
        return (

            <View style={styles.container}>

                <TouchableOpacity style={styles.leftIconPositionStyle} onPress={()=>{alert('左边')}}>
                    <Image source={{uri:this.props.leftImage}} style={styles.imageStyle}/>
                </TouchableOpacity>

                <View style={styles.titleTextPostionStyle}>

                    <Text style={styles.titleTextStyle}>{this.props.navTitle}</Text>

                </View>

                <TouchableOpacity style={styles.rightIconPositionStyle} onPress={()=>{alert('右边')}}>
                    <Image source={{uri:this.props.rightImage}} style={styles.imageStyle}/>
                </TouchableOpacity>

            </View>
        );
    },


});

const styles = StyleSheet.create({
    container: {
        // height:Platform.OS === 'ios' ? 64 : 44 ,
        height:64,
        backgroundColor:'orange',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center'
    },

    imageStyle:{

        width:25,
        height:25,
    },

    leftIconPositionStyle:{

        position:'absolute',
        left:10,
        // bottom: Platform.OS === 'ios' ? 12:0
        bottom:12
    },
    rightIconPositionStyle:{

        position:'absolute',
        right:10,
        // bottom: Platform.OS === 'ios' ? 12:0
        bottom:12
    },

    titleTextStyle:{
        color:'white',
        fontSize:18,
    },

    titleTextPostionStyle:{

        // marginTop:Platform.OS === 'ios' ? 20 : 0
        marginTop:20
    }

});

module.exports = CommonNavigationView;

