/**
 * Created by ZCBL on 16/8/22.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

class Main extends Component {
    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image source={...} />}
                    renderSelectedIcon={() => <Image source={...} />}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    {homeView}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => <Image source={...} />}
                    renderSelectedIcon={() => <Image source={...} />}
                    renderBadge={() => <CustomBadgeView />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    {profileView}
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

module.exports =  Main;
