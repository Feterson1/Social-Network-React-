import React from 'react';
import mypost from './MyPosts.module.css';
import Post from './Post/Post';





const MyPosts = (props) => {



let post = props.posts.map(p =>  <Post like={p.LikesCount} message={p.message} name={p.name} key = {p.id} age={p.age} /> );

let newPostElement = React.createRef();
let onAddPost = () =>{

  props.addPost();
  
 
 
}

let onPostChange = () =>{
  let text = newPostElement.current.value;
 
  props.updateNewPostText(text);
}

  return (

    <div className={mypost.postsBlock}>
      My posts
      <div>
        <div>
          <textarea  onChange ={onPostChange} ref={newPostElement} value={props.newPostText} name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button type='button' onClick={onAddPost}>Add Post</button>
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