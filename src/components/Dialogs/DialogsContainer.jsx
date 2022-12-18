import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

    
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState().dialogsPage;


                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                return (
                    <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state} />
                );


            }

            }
        </StoreContext.Consumer>


    );
}
export default DialogsContainer;
