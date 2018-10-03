import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../config';
import { PostFeed } from './container';

class InstaClone extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{flex: 1, width:'100%', height:'100%'}}>
        
        <View style={styles.tempNav}>
          <Image style={{width:170, height: 50}} source={config.images.instagramTextLogo} />
        </View>

        <PostFeed />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  tempNav: {
    width: '100%',
    height:75,
    marginTop:20,
    backgroundColor: '#f7f7f7',
    borderBottomColor: '#cccccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default InstaClone;