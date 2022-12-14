import React from 'react';
import dialog from './../Dialogs.module.css';





const Message = (props) => {
    return (
        <div className={dialog.message}>{props.message}</div>
    );
}






export default Message;
