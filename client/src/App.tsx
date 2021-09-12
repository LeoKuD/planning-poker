import React, { useEffect } from 'react';
import {
  Switch, Route, useHistory,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NotFound from 'components/NotFound';
import Results from 'pages/Results';
import Lobby from 'pages/Lobby';
import Game from 'pages/Game';
import Main from 'pages/Main';
import Header from 'components/Header';
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
        <Header />
        <section className="content">
          {!isLoading ? (
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/game" component={Game} />
              <Route path="/lobby" component={Lobby} />
              <Route path="/result" component={Results} />
              <Route path="*" component={NotFound} />
            </Switch>
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
        </section>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
