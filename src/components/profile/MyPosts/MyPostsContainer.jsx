import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';


let MapStateToProps = (state) =>{
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let MapDispatchToProps = (dispatch) => {
    
    return {
        updateNewPostText: (text) => { 
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        }, 
        addPost: () =>{
            dispatch(addPostActionCreator())
        }
 

    }
}

const MyPostsContainer = connect(MapStateToProps,MapDispatchToProps) (MyPosts);

export default MyPostsContainer;