const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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

};


const dialogsReducer = (state = initialState, action) => {

    

    switch (action.type) {

        case ADD_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages:[...state.messages,{id:7,message:text,}],
               
            };

           
        
        case UPDATE_NEW_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.newText,
            };
           
            

        
        default:
           
            return state;
        
    }


}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, });

export const updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text, });

export default dialogsReducer;