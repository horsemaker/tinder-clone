import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar'
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "Baburao",
            image: "https://images.indianexpress.com/2019/11/Baburao-hera-pheri-paresh-rawal-1200.jpg",
            message: "Hello",
        },
        {
            message: "Hello"
        },
        {
            name: "Baburao",
            image: "https://images.indianexpress.com/2019/11/Baburao-hera-pheri-paresh-rawal-1200.jpg",
            message: "Ha?",
        },
        {
            message: "Deviprasad ghar par hai?"
        },
        {
            name: "Baburao",
            image: "https://images.indianexpress.com/2019/11/Baburao-hera-pheri-paresh-rawal-1200.jpg",
            message: "Abhi 10 min pehale hi chal base",
        },
        {
            name: "Baburao",
            image: "https://images.indianexpress.com/2019/11/Baburao-hera-pheri-paresh-rawal-1200.jpg",
            message: "Aapko kuch bolna tha?",
        },
        {
            message: "Chal base?"
        },
        {
            name: "Baburao",
            image: "https://images.indianexpress.com/2019/11/Baburao-hera-pheri-paresh-rawal-1200.jpg",
            message: "Kutriya saala, dekh ke number dial kar!",
        }
    ]);

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">
                YOU MATCHED WITH BABURAO ON 13/13/2013
            </p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src=  {message.image} />
                        <p className="chatScreen__text">
                            {message.message}
                        </p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">
                            {message.message}
                        </p>
                    </div>
                )
                
            ))}

            
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..." 
                    type="text" 
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">
                    SEND
                </button>
            </form>
            

        </div>
    )
}

export default ChatScreen;
