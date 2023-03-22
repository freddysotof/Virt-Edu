import React from 'react';
import classes from './Contact.module.css';

type ContactProps = {
  name: string;
  image: string;
  lastMessage: string;
  unreadMessages: number;
};

function Contact({ name, image, lastMessage, unreadMessages }: ContactProps) {
  return (
    <div className={classes.contact}>
      <img src={image} alt={name} className={classes.image} />
      <div className={classes.details}>
        <span className={classes.name}>{name}</span>
        <span className={classes.lastMessage}>{lastMessage}</span>
      </div>
      <div className={classes.unreadCount}>{unreadMessages}</div>
    </div>
  );
}

export default Contact;
