export enum Role {
  player = 'player',
  dealer = 'dealer',
  observer = 'observer',
}

export type TypePosition = Role.player | Role.dealer | Role.observer;

export enum IssuePriority {
  low = 'low',
  middle = 'middle',
  hight = 'hight',
  }

export interface Message {
  id: number;
  value: string;
  userId: string | null;
  time?: Date
  }