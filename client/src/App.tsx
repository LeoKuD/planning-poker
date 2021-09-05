import React, { useEffect } from 'react';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Login from './pages/Login';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from './redux/actions/auth/actions';
import PrivateRoute from './components/private-route';
import { IStore } from './types';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const history = useHistory();

  const { currentUser, isLoading } = useSelector((state: IStore) => state.auth);

  useEffect(() => {
    dispatch(getProfile(history));
  }, []);

  return (
    <>
      <div className="App">
        {!isLoading ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            
            <PrivateRoute
              isLoggedIn={!!currentUser}
              path="/demo"
              component={Demo}
            />
            <Route>
              <Redirect to="/demo" />
            </Route>
          </Switch>
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            Loading...
          </div>
        )}
      </div>
    </>
  );
}

export default App;
