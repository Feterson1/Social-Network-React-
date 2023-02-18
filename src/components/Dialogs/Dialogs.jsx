import React from 'react';
import dialog from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {


    let state = props.dialogsPage;

    let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogsItem name={d.name} key ={d.id} id={d.id} />);

    let messagesElements = props.dialogsPage.messages.map((m) => <Message message={m.message} key = {m.id} />);

    let newMessagesElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();

    }

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        props.updateNewMessageText(text);

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
                <textarea ref={newMessagesElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={onAddMessage}>Submit</button>
            </div>
        </div>

    );
}

export default Dialogs;
