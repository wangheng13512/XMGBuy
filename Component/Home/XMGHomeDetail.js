import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class XMGHomeDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    测试跳转
                </Text>

            </View>
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

module.exports = XMGHomeDetail;