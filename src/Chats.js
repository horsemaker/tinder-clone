import React from 'react';
import Chat from './Chat';
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Baburao"
                message="Kutriya saala, dekh ke number dial kar!"
                timestamp="5 minutes ago"
                profilePic="https://images.indianexpress.com/2019/11/Baburao-hera-pheri-paresh-rawal-1200.jpg"
            />
            <Chat
                name="Pappu"
                message="Thik hai bhai, ab mai chalta hun"
                timestamp="10 seconds ago"
                profilePic="https://www.bbc.co.uk/staticarchive/d0a65a0af9022f3271084e05d9a346fda33ae059.jpg"
            />
            <Chat 
                name="Mukess"
                message="Kem Chho Motabhai?"
                timestamp="40 seconds ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c7d7829a7ea434b351ba0b6%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D206%26cropX2%3D2043%26cropY1%3D250%26cropY2%3D2089"
            />
            <Chat
                name="Raju"
                message="Mere paas ek scheme hai!"
                timestamp="1 minute ago"
                profilePic="https://i.pinimg.com/originals/6a/9f/c2/6a9fc2755d3766df06e0702fd6ac9672.jpg"
            />
            <Chat
                name="Kabira"
                message="Kabira speaking..."
                timestamp="2 minutes ago"
                profilePic="https://i0.wp.com/thebrokenscooter.com/wp-content/uploads/2012/04/kabira.jpg?resize=548%2C314"
            />
            <Chat
                name="Kachra Seth"
                message="Pehle tu de"
                timestamp="8 minutes ago"
                profilePic="https://secureservercdn.net/104.238.69.231/m3v.e54.myftpupload.com/wp-content/uploads/2020/07/150-rupaya-dega.jpg"
            />
            <Chat
                name="Munnabhai"
                message="Abhi maza aayega na bhidu!"
                timestamp="15 minutes ago"
                profilePic="https://indianmemetemplates.com/storage/mera-maal-kidhar-hai.jpg"
            />
        </div>
    )
}

export default Chats
