import React,{Component} from 'react';

import {connect} from 'react-redux'; // connect to reduc createStore
import {fetchPosts} from '../actions/postAction'; // call the action
import PropTypes from 'prop-types';
class Post extends Component{

  componentWillMount =() =>{
    this.props.fetchPosts();
    // console.log()
  }

  componentWillReceiveProps = (nextProps) =>{
    if(nextProps.newPost){
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render(){
    const postItems = this.props.posts.map(post =>(
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>POSTS</h1>
        {postItems}
      </div>
    )
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}
const mapStateToProps =  state => ({
  posts:state.posts.items, //posts because in rootReducer we have used posts here so maintain sam variable
  newPost: state.posts.item
})

export default connect(mapStateToProps,{ fetchPosts })(Post);
//export default connect (mapStateToProps, function for action)

//mapStateToProps -- get state from redux and map to props of component and we can use inside our compinent
