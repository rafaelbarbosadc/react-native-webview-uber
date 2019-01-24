import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StatusBar, PermissionsAndroid } from 'react-native';
import { WebView } from 'react-native-webview';

export default class MyWeb extends Component {      

  async componentDidMount() {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
     await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    } catch(e) {
      console.log(e)
    }
  
  }
  
  render() {

    return (
      <View
      style={{flex:1}}
      >
      <StatusBar 
       backgroundColor="#fff"
       barStyle="dark-content"
       />
        <WebView
          geolocationEnabled={true}
          source={{uri: 'https://www.uber.com/pt-BR/fare-estimate/'}}
          style={{marginTop: 0}}
        />  
      </View>
      
    );
  }
}