import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import dialog from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (<Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state} />);
}

export default DialogsContainer;
