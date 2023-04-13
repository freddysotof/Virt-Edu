import React from 'react';
import classes from '../../assets/css/messages/SendMessage.module.css';
import { MdSend } from 'react-icons/md';
import { FaSmile } from 'react-icons/fa';

function SendMessage() {
  return (
    <div className={classes.sendMessage}>
      <button className={classes.emojiButton}>
        <FaSmile />
      </button>
      <input type="text" placeholder="Type a message..." />
      <button className={classes.sendButton}>
        <MdSend />
      </button>
      
    </div>
  );
}

export default SendMessage;
