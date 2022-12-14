import React from 'react';
import mypost from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updateNewPostTextActionCreator } from '../../../redux/profile-reducer';




const MyPosts = (props) => {



let post = props.posts.map(p =>  <Post like={p.LikesCount} message={p.message} name={p.name} age={p.age} /> );

let newPostElement = React.createRef();
let addPost = () =>{

  
  props.dispatch(addPostActionCreator());
 
 
}

let onPostChange = () =>{
  let text = newPostElement.current.value;
  props.dispatch(updateNewPostTextActionCreator(text));
}

  return (

    <div className={mypost.postsBlock}>
      My posts
      <div>
        <div>
          <textarea  onChange ={onPostChange} ref={newPostElement} value={props.newPostText} name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button type='button' onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div>
        New Post
      </div>

      <div className={mypost.posts}>
       {post}


      </div>
    </div>


  );
}
export default MyPosts;