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

var XMGMain = require('./Component/Main/XMGMain');

export default class XMGBuy extends Component {
  render() {
    return (
      <XMGMain/>
    );
  }
}


AppRegistry.registerComponent('XMGBuy', () => XMGBuy);
