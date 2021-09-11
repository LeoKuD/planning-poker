import React, { useEffect } from 'react';
import {
  Switch, Route, useHistory, Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Lobby from './pages/Lobby';
import Game from './pages/Game';
import Home from './pages/Home';
import { getProfile } from './redux/actions/auth/actions';

import './App.css';

const App: React.FC<Record<string, never>> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = false;

  useEffect(() => {
    dispatch(getProfile(history));
  }, []);

  return (
    <>
      <div className="App">
        {!isLoading ? (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/game" component={Game} />
              <Route path="/lobby" component={Lobby} />
              <Route>
                <Redirect to="/demo" />
              </Route>
            </Switch>
          </>
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Loading...
          </div>
        )}
      </div>
    </>
  );
};

export default App;
