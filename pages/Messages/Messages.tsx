import React from 'react';
import classes from './Messages.module.css';
import NewChat from './NewChat';
import SearchBar from './SearchBar';
import ChatBox from './ChatBox';
import SendMessage from './SendMessage';
import Contact from './Contact'; // Importamos el componente Contact

function Messages() {
  return (
    <div className={classes.messages}>
      
      <div className={classes.contactsBox}>
        <div className={classes.contactsHead}>
        <SearchBar />
        <NewChat />
        </div>

        <div className={classes.contactsList}>
        <Contact name="Juan" image="https://st.depositphotos.com/2309453/3120/i/600/depositphotos_31203671-stock-photo-friendly-smiling-man.jpg" lastMessage="Hola, ¿cómo estás?" unreadMessages={1}/>
        </div>
      </div>
      <div className={classes.chat}>
        <ChatBox />
        <SendMessage />
      </div>
    </div>
  );
}

export default Messages;
