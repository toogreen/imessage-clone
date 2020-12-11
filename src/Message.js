import React, { forwardRef } from 'react';
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"; 
import "./Message.css";
import * as timeago from "timeago.js";
import MenuPopupState from "./components/MenuPopupState";
import { selectChatId } from "./features/chatSlice";
import db from "./firebase"

// ES6 way of writing function:
const Message = forwardRef(
    ( 
        {id, msgId, contents: { timestamp, displayName, email, message, photo, uid} },
        ref
    ) => {
    const user = useSelector(selectUser);
    const chatId = useSelector(selectChatId);

    function delMessage() {

        db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .doc(msgId)
        .delete();
    }
    
    return (
        <div ref={ref} className={`message ${user.email === email && "message__sender"}`}>
            <Avatar className='message__photo' src={photo} />
            <p>{message}</p>
            <small>{timeago.format(new Date(timestamp?.toDate()).toLocaleString())}</small>
            {user.email === email && 
                <MenuPopupState 
                    //datatopass={msgId}
                    functiontopass={delMessage}
                    labeltopass={"Delete this message"}
                />
            } 
        </div>
    );
})

export default Message;
