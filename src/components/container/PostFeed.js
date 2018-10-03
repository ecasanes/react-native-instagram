import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Post } from '../presentation';

class PostFeed extends Component {

  renderPost = ({item}) => {
    // console.log('renders again???');
    return <Post item={item} />
  }

  keyExtractor = (item, index) => {
    // console.log('item: ', item);
    return item.toString();
  }

  render() {
    return (
      <FlatList data={[1,2,3,4,5,6,7,8,9,10]}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderPost}
      />
    )
  }
}

export default PostFeed;