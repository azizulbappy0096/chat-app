import React from 'react';
import "./InputBox.css";

function InputBox({message, setMessage, sendMessage}) {
    return (
        <div className="inputBox">
              <input value={message} placeholder="Type message..." onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === "Enter" ? sendMessage(e) : ""} /> 
              <button className="inputBox__send" onClick={(e) => sendMessage(e)}> Send </button>
        </div>
    )
}

export default InputBox;
