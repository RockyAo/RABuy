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
    ListView,
    TouchableOpacity
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var HomeTopListView = React.createClass({

    getDefaultProps(){

        return{

            dataArr:[],

        }
    },

    getInitialState(){

        var dataSourceArr = new ListView.DataSource({rowHasChanged:(row1,row2) => row1 != row2})

        return{

            dataSource:dataSourceArr.cloneWithRows(this.props.dataArr)

        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.listViewContentStyle}
                scrollEnabled={false}
                enableEmptySections = {true}
            />
        );
    },

    renderRow(rowData){

        return(

           //<TouchableOpacity onPress={()=>{alert(rowData.title)}}>
               <View style={styles.cellStyle}>
                   <Image source={{uri:rowData.image}} style={{width:52,height:52}}/>
                   <Text style={{color:'black',fontSize:12}}>
                       {rowData.title}
                   </Text>
               </View>
            //</TouchableOpacity>
        )
    }
});

const styles = StyleSheet.create({


    cellStyle:{

        // backgroundColor:'red',
        width:70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:(width-70*5)/6
    },

    listViewContentStyle:{

        flexWrap:'wrap',
        flexDirection:'row',
        width:width,

    }

});

module.exports = HomeTopListView;
