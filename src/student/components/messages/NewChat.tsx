import React from 'react';
import classes from '../../assets/css/messages/NewChat.module.css';

function NewChat() {
  return (
    <div className={classes.newChat}>
      <i className={`${classes.newChatIcon} fas fa-plus`}>+</i>
    </div>
  );
}

export default NewChat;