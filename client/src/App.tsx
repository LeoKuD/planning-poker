import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import NotFound from 'components/NotFound';
import Results from 'pages/results';
import Lobby from 'pages/lobby';
import Game from 'pages/session';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'pages/home';

import './App.scss';

const App: React.FC<Record<string, never>> = () => {
  const isLoading = false;

  return (
    <div className="App">
      <Header />
      <section className="app-content">
        {!isLoading ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/game" component={Game} />
            <Route path="/lobby" component={Lobby} />
            <Route path="/results" component={Results} />
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
      <Footer />
    </div>
  );
};

export default App;
