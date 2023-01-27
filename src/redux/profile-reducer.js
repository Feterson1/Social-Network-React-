const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are you?', LikesCount: 12, name: 'Dmitriy', age: 19 },
        { id: 2, message: 'Good', LikesCount: 123, name: 'Alexander', age: 27 },
        { id: 3, message: 'BlaBla', LikesCount: 555, name: 'Jotaro', age: 46 },
        { id: 4, message: 'Dada', LikesCount: 1263, name: 'Andrey', age: 14 },
    ],
    newPostText: 'Stone Ocean!',
    profile: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 33,
                message: state.newPostText,
                LikesCount: 333,
                name: 'Josuke',
                age: 31,
            };

            return { 
                ...state,
                posts: [...state.posts,newPost],
                newPostText: '',

             };
        }

        case UPDATE_NEW_POST_TEXT: {


            return { 
                ...state,
                newPostText: action.newText,
             };
            
        }

        case SET_USER_PROFILE:{

            return {...state, profile: action.profile}

        }

        default: {
           
            return state;
        }
    }






}


export const addPostActionCreator = () => ({ type: ADD_POST, })

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text, });

export const setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile})


export default profileReducer;