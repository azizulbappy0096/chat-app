import React, { useState } from "react";
import "./Join.css";
import { Link } from "react-router-dom";

function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="join">
      <section className="join__innerContainer">
        <h2 className="join__header"> Join </h2>
        <div className="join__form">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />

          <Link
          
            onClick={(e) => (name && room ? "" : e.preventDefault())}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="join__signin"> Sign In </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Join;
