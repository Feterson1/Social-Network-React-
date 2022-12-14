
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT =  'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT =  'UPDATE-NEW-MESSAGE-TEXT';



let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi,how are you?', LikesCount: 12, name: 'Dmitriy', age: 19 },
                { id: 2, message: 'Good', LikesCount: 123, name: 'Alexander', age: 27 },
                { id: 3, message: 'BlaBla', LikesCount: 555, name: 'Jotaro', age: 46 },
                { id: 4, message: 'Dada', LikesCount: 1263, name: 'Andrey', age: 14 },
            ],
            newPostText: 'Stone Ocean!',
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Lorem' },
                { id: 2, message: 'Wow' },
                { id: 3, message: 'Fuck it' },
                { id: 4, message: 'Maxim' },
                { id: 5, message: 'Damn' },
                { id: 6, message: 'Cs' },],

            newMessageText: 'Блять',

            dialogs: [
                { id: 1, name: 'Dmitriy' },
                { id: 2, name: 'Anna' },
                { id: 3, name: 'Yan' },
                { id: 4, name: 'Maxim' },
                { id: 5, name: 'Dmitriy' },
                { id: 6, name: 'Gleb' },
                { id: 7, name: 'Jotaro' },
                { id: 8, name: 'Joseph' },
                { id: 9, name: 'Timoshnya' },
                { id: 10, name: 'Andrey' },],

        }




    },
    getState(){
        return this._state;
    },
    _callSubcriber() {
        console.log('state was changed');
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },
    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 33,
                message: this._state.profilePage.newPostText,
                LikesCount: 333,
                name: 'Josuke',
                age: 31,
            };
            this._state.profilePage.posts.push(newPost);
    
            this._state.profilePage.newPostText = '';
    
            this._callSubcriber(this._state);

        }else if(action.type === ADD_MESSAGE){
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newMessage);
    
            this._state.dialogsPage.newMessageText = '';
    
            this._callSubcriber(this._state);
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){

            this._state.profilePage.newPostText = action.newText;

            this._callSubcriber(this._state);
        }
        else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageText = action.newText;

            this._callSubcriber(this._state);
        }

    },
}

export const addPostActionCreator = () =>({type: ADD_POST,})
  
export const updateNewPostTextActionCreator = (text) =>
({type: UPDATE_NEW_POST_TEXT,newText: text,});

  export const addMessageActionCreator = () =>({type: ADD_MESSAGE,});
  
export const updateNewMessageTextActionCreator = (text) =>
({type: UPDATE_NEW_MESSAGE_TEXT,newText: text,});

export default store;

window.store = store;