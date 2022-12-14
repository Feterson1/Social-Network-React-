import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import dialog from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogsItem name={d.name} id={d.id} />);

    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} />);

    let newMessagesElement = React.createRef();

  let addMessage = () =>{
    props.dispatch(addMessageActionCreator());
  }

    let onMessageChange = () =>{
        let text = newMessagesElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div>
            <div className={dialog.Dialogs}>
                <div className={dialog.dialogsItems}>

                    {dialogsElements}

                </div>


                <div className={dialog.messages}>

                    {messagesElements}

                </div>
            </div>
            <div>
                <textarea ref={newMessagesElement} onChange ={onMessageChange} value = {props.dialogsPage.newMessageText} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={addMessage}>Submit</button>
            </div>
        </div>

    );
}

export default Dialogs;
