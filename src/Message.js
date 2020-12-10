import { Avatar } from "@material-ui/core";
import { PhotoAlbumRounded } from "@material-ui/icons";
import React from 'react';
import "./Message.css";

function Message({ 
    id, 
    contents: { timestamp, displayName, email, message, photo, uid},
}) {
    return (
        <div className="message">
            <Avatar src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    );
}

export default Message;
