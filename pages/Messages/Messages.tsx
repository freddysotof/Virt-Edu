import React from 'react';
import classes from './Messages.module.css';
import NewChat from './NewChat';
import SearchBar from './SearchBar';
import ChatBox from './ChatBox';
import SendMessage from './SendMessage';

function Messages() {
  return (
    <div className={classes.messages}>
      <div className={classes.contactsBox}>
        <SearchBar />
        <NewChat />
      </div>
      <div className={classes.chat}>
        <ChatBox />
        <SendMessage />
      </div>
    </div>
  );
}

export default Messages;