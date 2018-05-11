import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class XMGMore extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    更多
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

module.exports = XMGMore;