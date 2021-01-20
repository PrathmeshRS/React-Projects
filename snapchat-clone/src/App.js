import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebcamCapture from './WebcamCapture.js';
import Preview from './Preview.js';
import Chats from './Chats.js';
import ChatView from './ChatView';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login.js';
import { login, logout, selectUser } from './features/appSlice.js';
import { auth } from './firebase.js';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
            <div className="app__body">
              <div className="app__bodyBackground">
                <Switch>
                  <Route exact path="/chats/view">
                    <ChatView />
                  </Route>
                  <Route exact path="/chats">
                    <Chats />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                  <Route exact path="/preview">
                    <Preview />
                  </Route>
                </Switch>
              </div>
            </div>)}
      </Router>

    </div>
  );
}

export default App;
