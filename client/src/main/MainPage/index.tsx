import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import StartYourPlanning from 'main/components/StartYourPlanning';

const Home: React.FC<HTMLElement> = () => {
  const history = useHistory();
  const [welcomeMsg, setWelcomeMsg] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/start');
      setWelcomeMsg(res.data.msg);
    })();
  }, []);

  const startNewGame = (): void => {
    history.push('/lobby');
  };

  const connect = (url: string): void => {
    console.log(url);
  };

  return (
    <>
      <h2>{welcomeMsg}</h2>
      <StartYourPlanning startNewGame={startNewGame} connect={connect} />
    </>
  );
};

export default Home;
