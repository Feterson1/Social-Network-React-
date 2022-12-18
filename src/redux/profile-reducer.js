const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState ={
    posts: [
        { id: 1, message: 'Hi,how are you?', LikesCount: 12, name: 'Dmitriy', age: 19 },
        { id: 2, message: 'Good', LikesCount: 123, name: 'Alexander', age: 27 },
        { id: 3, message: 'BlaBla', LikesCount: 555, name: 'Jotaro', age: 46 },
        { id: 4, message: 'Dada', LikesCount: 1263, name: 'Andrey', age: 14 },
    ],
    newPostText: 'Stone Ocean!',
};

const profileReducer = (state = initialState,action) => {
   
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 33,
                message: state.newPostText,
                LikesCount: 333,
                name: 'Josuke',
                age: 31,
            };
            state.posts.push(newPost);
    
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;

    }
   

    



}


export const addPostActionCreator = () =>({type: ADD_POST,})
  
export const updateNewPostTextActionCreator = (text) =>
({type: UPDATE_NEW_POST_TEXT,newText: text,});


export default profileReducer;