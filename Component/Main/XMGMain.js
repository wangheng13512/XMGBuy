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
    View,
    Image,
    Platform,    //判断当前运行的系统
    Navigator
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var XMGHome = require('../Home/XMGHome');

var XMGMine = require('../Mine/XMGMine');

var XMGShop = require('../Shop/XMGShop');

var XMGMore = require('../More/XMGMore');

class XMGMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'home'
        }

    }

    render() {
        return (
            <TabNavigator>
                {/*首页*/}
                <TabNavigator.Item
                    title="首页"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
                    onPress={()=>this.setState({selectedTab: 'home'})}
                    selected={this.state.selectedTab === 'home'}
                >
                    <XMGHome/>
                </TabNavigator.Item>
                {/*商家*/}
                <TabNavigator.Item
                    title="商家"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
                    onPress={()=>this.setState({selectedTab: 'shop'})}
                    selected={this.state.selectedTab === 'shop'}
                >
                    <XMGShop/>
                </TabNavigator.Item>
                {/*我的*/}
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
                    onPress={()=>this.setState({selectedTab: 'mine'})}
                    selected={this.state.selectedTab === 'mine'}
                >
                    <XMGMine/>
                </TabNavigator.Item>
                {/*更多*/}
                <TabNavigator.Item
                    title="更多"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}
                    onPress={()=>this.setState({selectedTab: 'more'})}
                    selected={this.state.selectedTab === 'more'}
                >
                    <XMGMore/>
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    }

});

module.exports = XMGMain;