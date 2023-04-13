
import React, { useEffect } from 'react';
import classes from '../assets/css/messages/Messages.module.css';
import { useCheckAuth } from '../../hooks';
import SearchBar from '../components/messages/SearchBar';
import NewChat from '../components/messages/NewChat';
import Contact from '../components/messages/Contact';
import ChatBox from '../components/messages/ChatBox';
import SendMessage from '../components/messages/SendMessage';

function MessagePage() {

  return (

    <div className={classes.messages}>
      
      <div className={classes.contactsBox}>
        <div className={classes.contactsHead}>
        <SearchBar />
        <NewChat />
        </div>

        <div className={classes.contactsList}>
        <Contact name="Juan" image="https://st.depositphotos.com/2309453/3120/i/600/depositphotos_31203671-stock-photo-friendly-smiling-man.jpg" lastMessage="Hola, ¿cómo estás?" unreadMessages={1}/> {/* Añadimos el componente Contact */}
        </div>
      </div>
      <div className={classes.chat}>
        <ChatBox />
        <SendMessage />
      </div>
    </div>
  );
}

export default MessagePage;
