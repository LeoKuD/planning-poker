import React from 'react';
import SettingsForm from 'components/LobbySettings/SettingsForm';
import Card from 'components/LobbySettings/Card';

const Lobby: React.FC<HTMLElement> = () => (
  // <SettingsForm />
  <Card edit cardScore={2} shortName="SR" />
);

export default Lobby;
