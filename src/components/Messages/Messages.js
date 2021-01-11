import React from "react";
import Message from "./Message/Message";
import "./Messages.css";
import ScrollToBottom from "react-scroll-to-bottom";

function Messages({ messages, name }) {
  console.log("msg>>>",messages)
  return (
    
      <ScrollToBottom className='Messages'>
        {messages.map((message, i) => (
          <Message key={i} message={message} currentUser={name} />
        ))}
      </ScrollToBottom>
 
  );
}

export default Messages;
