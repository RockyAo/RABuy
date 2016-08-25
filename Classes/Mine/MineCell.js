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
    Platform
} from 'react-native';

var MineCell = React.createClass({

    getDefaultProps(){
      return{

          leftImageName:'', //左侧图片
          title:'',  //title
          discribeTitle:'', //描述
          needNewImage:false, //新消息图

      }

    },

    render() {
        return (

            <TouchableOpacity onPress={()=>{alert("点击了"+this.props.title)}}>
                <View style={styles.container}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri:this.props.leftImageName}} style={styles.leftImageStyle}/>
                        <Text style={{marginLeft:10}}>{this.props.title}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {this.creatDiscribeLabel()}
                        {this.creatNewImageView()}
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:10}}/>
                    </View>


                </View>

            </TouchableOpacity>

        );
    },

    creatDiscribeLabel(){

        if (this.props.discribeTitle.length > 0){

            return(

                <Text style={{marginRight:10,color:'rgb(200,200,200)'}}>{this.props.discribeTitle}</Text>
            )
        }
    },

    creatNewImageView(){

        if (this.props.needNewImage){

            return(

                <Image source={{uri:'me_new'}} style={{width:24,height:13,marginRight:10}}/>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {
        height:44,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:Platform.OS === 'ios' ? 0.25 : 0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    leftImageStyle:{

        width:24,
        height:24,
        borderRadius:12,
        marginLeft:10
    }

});

module.exports = MineCell;

