export enum UserRole {
  player = 'player',
  dealer = 'dealer',
  observer = 'observer',
}

export interface User {
  id: string;
  firstName: string,
  lastName?: string,
  role: UserRole,
  position?: string,
  avatar?: string
}

export interface UserData extends User {
  isYou?: boolean,
  showDeleteButton?: boolean
}

export interface Message {
  id: number;
  value: string;
  user: User;
  time: Date
}
