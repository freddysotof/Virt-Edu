export default Messages
import React from 'react';
import classes from './Messages.module.css';
import NewChat from './NewChat';
import SearchBar from './SearchBar';
import ChatBox from './ChatBox';
import SendMessage from './SendMessage';
<<<<<<< HEAD
import { Layout } from '../../layout/Layout';
=======
import Contact from './Contact'; // Importamos el componente Contact
>>>>>>> 570691be (Added ContactsList)

function Messages() {
  return (
    <Layout>
        
  
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
    </Layout>
  );
}

export default Messages;
