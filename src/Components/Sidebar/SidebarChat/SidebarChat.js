import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../FireBase/ConfigFile/Firebase.config';
import './SidebarChat.css';

const SidebarChat = ({ id, name, addNewChat }) => {
    const [seed, setSeed] = useState('');
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

    }, []);
    const createChat = () => {
        const roomName = prompt('Please enter name for chat Room');
        if (roomName) {
            // do some clever stuff...
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>Last Message...</p>
                </div>
            </div>
        </Link>

    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    );
};

export default SidebarChat;