import React, { useEffect, useState } from "react";
import "./Chat.css";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar/InfoBar";
import InputBox from "../InputBox/InputBox";
import Messages from "../Messages/Messages";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
let socket;

function Chat({ location }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);

  const endpoint = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(endpoint);
    console.log(socket);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("active", ({users}, callback) => {
      setActiveUsers([...users]);
    });
  }, [activeUsers]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  console.log(messages);
  return (
    <div className="chat">
      <div className="chat__container">
        <section className="chat__left">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </section>
        <section className="chat__right">
          <h1> Realtime Chat Application 💬</h1>
          <h3> Created with React, Express, Node and Socket.IO ❤️</h3>
          <h3 style={{marginBottom: "24px"}}> Try it out right now! ⬅️ </h3>
          <h4 style={{marginBottom: "0px"}}> People currently are active: </h4>
          <div>
          {activeUsers.map((user, i)=> (
            <p> <FiberManualRecordIcon /> {user} </p>
          ))}
          </div>
        </section>
      </div>
    
    </div>
  );
}

export default Chat;
