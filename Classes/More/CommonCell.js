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
    Switch
} from 'react-native';

var CommonCell = React.createClass({

    getDefaultProps(){

        return{
            title:'', //左侧标题
            isSwitch:false, // 是否显示swich开关
            touchEnable:true, // 是否可以点击
            detailTitle:''
        }
    },

    getInitialState(){

        return{
            //用于判断是否开关是否开启
            isOn:false,
        }
    },

    render() {
        return (

            <TouchableOpacity onPress = {()=>{alert('点击了'+this.props.title)}} disabled={!this.props.touchEnable}>

                <View style={styles.container}>
                    {/*左边*/}
                    <Text style={{marginLeft:10}}> {this.props.title}</Text>
                    {/*右边*/}
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>

        );
    },

    renderRightView(){

        if (this.props.isSwitch) {


            return (

               <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={{marginRight:10}}/>
            )

        }else {

            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.discribeLabel()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:10}}/>
                </View>

            )
        }
    },

    discribeLabel(){

        if (this.props.detailTitle.length > 0){

            return(

                <Text style={{color:'#d8d8d8',marginRight:10}}>{this.props.detailTitle}</Text>
            )
        }
    }
});

const styles = StyleSheet.create({
    container: {
        height:44,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.25,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

});

module.exports = CommonCell;

