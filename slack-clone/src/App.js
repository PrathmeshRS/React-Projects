import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';


function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (<div>
          <Header />
          <div className="app__body">
            <Sidebar />
            {/* React-Router -> Chat */}
            <Switch>
              <Route path="/room/:roomId">
                <Chat />
              </Route>
              <Route path="/" >
                <h1>Welcome</h1>
              </Route>
            </Switch>
          </div>
        </div>
          )}

      </Router>
    </div>
  );
}

export default App;
