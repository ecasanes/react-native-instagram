import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class InstaClone extends Component {

  constructor() {
    super();
    this.state = {
      screenWidth: 0
    }
  }

  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get('window').width
    });
  }

  render() {

    const imageHeight = this.state.screenWidth * 1.1;
    const macbookImage = 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?cs=srgb&dl=computer-desk-electronics-374074.jpg&fm=jpg';

    return (
      <View style={{flex: 1, width:'100%', height:'100%'}}>
        
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>

        <View style={styles.userBar}>

          <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Image style={styles.userPic} source={require('../../assets/macbook-coffee.jpg')}></Image>
            <Text style={{marginLeft: 10}}>Ernest Oliver Casanes</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize:30}}>...</Text>
          </View>

        </View>

        <Image 
          style={{width: this.state.screenWidth, height:imageHeight}}
          /* source={require('../../assets/macbook-coffee.jpg')}  */
          source={{uri: macbookImage}}
          />
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
  userBar: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgb(250,250,250)',
    flexDirection:'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  }
});

export default InstaClone;