import React from 'react'; // 2.39.12
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/chat/:person">   {/* :person => wildcard */}
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          {/* default route at the bottom */}
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;


{/* buttons below tinder cards */}

{/* chats screen */}
{/* individual chat screen */}