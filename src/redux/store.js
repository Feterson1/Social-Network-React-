import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sideBar-reducer";





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

        },
        sideBar:{},




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

        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.sideBar = sideBarReducer(this._state.sideBar,action);


        this._callSubcriber(this._state);
    },
};





export default store;

window.store = store;