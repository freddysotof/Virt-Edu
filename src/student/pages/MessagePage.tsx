
import React, { useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';

import classes from '../assets/css/messages/Messages.module.css';
import { useAuthStore, useCheckAuth } from '../../hooks';
import SearchBar from '../components/messages/SearchBar';
import NewChat from '../components/messages/NewChat';
import Contact from '../components/messages/Contact';
import ChatBox from '../components/messages/ChatBox';
import SendMessage from '../components/messages/SendMessage';

function MessagePage() {

  const [connection, setConnection] = useState(null);
  const [chat, setChat] = useState([]);
  const latestChat = useRef(null);

  // latestChat.current = chat;

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44393/chat', { accessTokenFactory: () => localStorage.getItem('token') })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection.start()
        .then(result => {
          console.log('Connected!');

          connection.on('ReceiveMessage', message => {
            const updatedChat = [...latestChat.current];
            updatedChat.push(message);

            setChat(updatedChat);
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const sendMessage = async (user, message) => {
    const chatMessage = {
      userId: user,
      message: message
    };

    if (connection.connectionStarted) {
      try {
        await connection.invoke('SendChatMessageAsync', chatMessage);
      }
      catch (e) {
        console.log(e);
      }
    }
    else {
      alert('No connection to server yet.');
    }
  }

  const onClickSendMessage = ()=>{
    sendMessage("b4d203a7-7012-41fa-a438-62aca417866e","Hola pendejo");
  }

  return (

    <div className={classes.messages}>

      <div className={classes.contactsBox}>
        <div className={classes.contactsHead}>
          <SearchBar />
          <NewChat />
        </div>

        <div className={classes.contactsList}>
          <Contact name="Juan" image="https://st.depositphotos.com/2309453/3120/i/600/depositphotos_31203671-stock-photo-friendly-smiling-man.jpg" lastMessage="Hola, ¿cómo estás?" unreadMessages={1} /> {/* Añadimos el componente Contact */}
        </div>
      </div>
      <div className={classes.chat}>
        <ChatBox />
        <SendMessage onClickSend={onClickSendMessage} />
      </div>
    </div>
  );
}

export default MessagePage;
