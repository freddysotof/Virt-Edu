export default Messages
import React from 'react';
import classes from './Messages.module.css';
import NewChat from './NewChat';
import SearchBar from './SearchBar';
import ChatBox from './ChatBox';
import SendMessage from './SendMessage';
import { Layout } from '../../layout/Layout';

function Messages() {
  return (
    <Layout>
        
  
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
    </Layout>
  );
}

export default Messages;
