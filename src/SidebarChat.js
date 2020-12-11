import React, { useState, useEffect } from 'react'
import { Avatar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { setChat } from "./features/chatSlice";
import db from "./firebase";
import "./SidebarChat.css";
import * as timeago from "timeago.js";
import { selectUser } from "./features/userSlice";
import MenuPopupState from "./components/MenuPopupState";

function SidebarChat({ id, chatName, chatUserId, chatUserEmail }) {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);
    const user = useSelector(selectUser);

    console.log(user.id);

    useEffect(() => {
        db.collection("chats")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => 
                setChatInfo(snapshot.docs.map((doc) => doc.data()))
            );
    }, [id]);
    
    function delChat() {
        db.collection("chats").doc(id).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.log("Error removing document: ", error);            
        });

    }

    return (
        <div className="sidebarChat__row">
            <div onClick={() =>
                dispatch(
                    setChat({
                        chatId: id, 
                        chatName: chatName
                    })
                )
            }
            className="sidebarChat">
                <Avatar src={chatInfo[0]?.photo} />
                <div className="sidebarChat__info">
                    <h3>{chatName}</h3>
                    <p>{chatInfo[0]?.message}</p>
                    <p>{chatInfo.userEmail}</p>
                    <small>{timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString())}</small>
                </div>
            </div>
            {user.email === chatUserEmail  && 
            <MenuPopupState 
                    functiontopass={delChat}
                    labeltopass={"Delete this Chat Room"}
                />
            }
        </div>
        
    )
}

export default SidebarChat
