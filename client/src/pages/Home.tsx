import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Home: React.FC<HTMLElement> = () => {
  const [welcomeMsg, setWelcomeMsg] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/start');
      setWelcomeMsg(res.data.msg);
    })();
  }, []);

  return (
    <div className="App-header">
      <h2>{welcomeMsg}</h2>
    </div>
  );
};
