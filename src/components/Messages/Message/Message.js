import React, { useEffect, useState } from 'react';
import './Message.css';
import ReactEmoji from "react-emoji";

function Message({message: {user, text}, currentUser}) {
    const [isCurrentUser, setIsCurrentUser] = useState(false);

    useEffect(() => {
        let senderName = user.trim().toLowerCase();
        let recieverName = currentUser.trim().toLowerCase();
        if(senderName === recieverName) {
            setIsCurrentUser(true);
        }

        return () => {
            setIsCurrentUser(false);
        }
    }, [user])

    return (
       <div> 
        { !isCurrentUser ?
            (<section className="message__container justify-start">
                <div className="message__text">
                <p> {ReactEmoji.emojify(text)} </p>
                </div>
                <small className="message__sender ml-8"> {user} </small>
            </section>) : (<section className="message__container justify-end">
            <small className="message__sender mr-8"> {user} </small>
                <div className="message__text backgroundBlue">
                <p> {ReactEmoji.emojify(text)} </p>
                </div>
                
            </section>)}   
    </div>
        
    )
}

export default Message
