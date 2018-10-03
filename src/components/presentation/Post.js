import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config';

class Post extends Component {

  constructor() {
    super();
    this.state = {
      screenWidth: 0,
      liked: false
    }
  }

  componentDidMount() {
    this.setState({
      screenWidth: Dimensions.get('window').width
    });
  }

  likeImage = () => {
    
    this.setState((prevState) => {
      return {
        liked: !prevState.liked
      }
    });
  }

  render() {

    const imageHeight = this.state.screenWidth * 1.1;
    const macbookImage = 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?cs=srgb&dl=computer-desk-electronics-374074.jpg&fm=jpg';

    return (
      <View>
       
          <View style={styles.userBar}>

            <View style={{flexDirection:'row', alignItems: 'center'}}>
              <Image style={styles.userPic} source={require('../../../assets/macbook-coffee.jpg')}></Image>
              <Text style={{marginLeft: 10}}>Ernest Oliver Casanes</Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize:30}}>...</Text>
            </View>

          </View>

          <TouchableOpacity 
            activeOpacity={0.9}
            onPress={this.likeImage}>
            <Image 
              style={{width: this.state.screenWidth, height:imageHeight}}
              source={{uri: macbookImage}}
            />
          </TouchableOpacity>


          <View style={styles.userActions}>

            <Image style={[styles.userActionImage, {tintColor:this.state.liked?'red':null}]} source={config.images.heartIcon} />
            
            <Image style={styles.commentImage}  source={config.images.commentIcon} />
            <Image style={styles.userActionImage} source={config.images.shareIcon} />
          </View>

          <View style={styles.likesContainer}>
            {/* <Image style={{width:20,height:20,marginRight:5}} source={config.images.heartIcon} /> */}
            <Text style={{fontWeight:'600'}}>29 likes</Text>
          </View>

          <View style={styles.caption}>
            <Text>
              <Text style={{fontWeight:'bold'}}>ecasanes</Text>
              <Text style={{marginLeft:5}}>
                Oh, just another picture because... why not? Hello World 
                <Text>#test</Text>
                another text here...
              </Text>
              
            </Text>
          </View>

          
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
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(250,250,250)',
    flexDirection:'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  userActions: {
    width: '100%',
    height: config.styleConstants.rowHeight,
    flexDirection: 'row',
    /* borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth, */
    borderColor: '#cccccc',
    alignItems: 'center'
  },
  userActionImage: {
    width: 35,
    height: 35,
    marginHorizontal:7,
  },
  commentImage: {
    ...this.userActionImage,
    width:30,
    height:30,
    marginTop:2,
  },
  likesContainer: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginHorizontal:10
  },
  caption: {
    width:'100%',
    height:150,
    marginHorizontal: 10,
    flexDirection: 'row'
  }
});

export default Post;