import React from 'react';
import mypost from './Post.module.css';

const Post = (props) => {
  

  return (
      <div className={mypost.item}>
        <span>{props.name},{props.age}</span>
        <img src="https://cdn.forbes.ru/forbes-static/750x422/new/2022/11/4-636273af4beec.jpg" alt="" />
        <span>{props.message}</span>
        <div>
          <span>{props.like} Like</span>
        </div>
      </div>
  );
}
export default Post;