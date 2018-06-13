/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     Platform,    //判断当前运行的系统
//     Navigator
// } from 'react-native';
//
//
//
// import {
//     DrawerNavigator, StackNavigator,TabBarBottom,
// } from 'react-navigation';
//
// var XMGHome = require('../Home/XMGHome');
//
// var XMGMine = require('../Mine/XMGMine');
//
// var XMGShop = require('../Shop/XMGShop');
//
// var XMGMore = require('../More/XMGMore');
//
// class XMGMain extends Component {
//
//     constructor(props){
//         super(props);
//         this.state = {
//             selectedTab: 'home'
//         }
//
//     }
//
//     render() {
//         return (
//             <TabNavigator>
//                 {/*首页*/}
//                 <TabNavigator.Item
//                     title="首页"
//                     renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}/>}
//                     renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}
//                     onPress={()=>this.setState({selectedTab: 'home'})}
//                     selected={this.state.selectedTab === 'home'}
//                 >
//                     <XMGHome/>
//                 </TabNavigator.Item>
//                 {/*商家*/}
//                 <TabNavigator.Item
//                     title="商家"
//                     renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>}
//                     renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}
//                     onPress={()=>this.setState({selectedTab: 'shop'})}
//                     selected={this.state.selectedTab === 'shop'}
//                 >
//                     <XMGShop/>
//                 </TabNavigator.Item>
//                 {/*我的*/}
//                 <TabNavigator.Item
//                     title="我的"
//                     renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>}
//                     renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}
//                     onPress={()=>this.setState({selectedTab: 'mine'})}
//                     selected={this.state.selectedTab === 'mine'}
//                 >
//                     <XMGMine/>
//                 </TabNavigator.Item>
//                 {/*更多*/}
//                 <TabNavigator.Item
//                     title="更多"
//                     renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>}
//                     renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}
//                     onPress={()=>this.setState({selectedTab: 'more'})}
//                     selected={this.state.selectedTab === 'more'}
//                 >
//                     <XMGMore/>
//                 </TabNavigator.Item>
//
//             </TabNavigator>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     iconStyle:{
//         width: Platform.OS === 'ios' ? 30 : 25,
//         height: Platform.OS === 'ios' ? 30 : 25,
//     }
//
// });
//
// const DrawerRouteConfigs = {
//
//     Home: {
//         screen: XMGHome,
//         navigationOptions: ({navigation}) => ({
//             drawerLabel : '首页',
//         }),
//
//     },
//
//     Mine: {
//         screen: XMGMine,
//         navigationOptions: ({navigation}) => ({
//             drawerLabel : '首页',
//         }),
//
//     },
//
//     Shop: {
//         screen: XMGShop,
//         navigationOptions: ({navigation}) => ({
//             drawerLabel : '首页',
//         }),
//
//     },
//
//     More: {
//         screen: XMGMore,
//         navigationOptions: ({navigation}) => ({
//             drawerLabel : '首页',
//         }),
//
//     },
//
// };
//
//
// const DrawerNavigatorConfigs = {
//     initialRouteName: 'Home',
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     lazy: true,
//     tabBarOptions: {}
// };
// const Drawer = DrawerNavigator(DrawerRouteConfigs, DrawerNavigatorConfigs);
// const StackRouteConfigs = {
//     Drawer: {
//         screen: Drawer,
//     }
// };
// const StackNavigatorConfigs = {
//     initialRouteName: 'Drawer',
//     navigationOptions: {
//         title: '标题',
//         headerStyle: {backgroundColor: '#5da8ff'},
//         headerTitleStyle: {color: '#333333'},
//     }
// };
// // const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);
//
//
// module.exports = XMGMain;

import React, { Component } from 'react';
import {
    Image,
} from 'react-native';

import {
    TabNavigator,
    StackNavigator,

} from 'react-navigation'

import Home from '../Home/XMGHome';
import Mine from '../Mine/XMGMine';
import More from '../More/XMGMore';
import Shop from '../Shop/XMGShop';
import HomeDetail from '../Home/XMGHomeDetail';

const MainTab = TabNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle:'首页',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={{uri:'icon_tabbar_homepage'}}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        },
    },
    Shop: {
        screen: Shop,
        navigationOptions: {
            headerTitle:'商家',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '商家',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={{uri:'icon_tabbar_merchant_normal'}}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        },
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            headerTitle:'我的',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={{uri:'icon_tabbar_mine'}}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        },
    },
    More: {
        screen: More,
        navigationOptions: {
            headerTitle:'更多',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            tabBarLabel: '更多',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={{uri:'icon_tabbar_misc'}}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        },
    },

},{

    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#EB3695',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },


});

export  default navi = StackNavigator({

    MainTab:{
        screen: MainTab,
    },
    Details: {
        screen: HomeDetail,
    },

},{

});

