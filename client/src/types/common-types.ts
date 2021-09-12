export enum UserRole {
  player = 'player',
  dealer = 'dealer',
  observer = 'observer',
}
export enum IssuePriority {
  low = 'low',
  middle = 'middle',
  hight = 'hight',
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
  showDeleteButton?: boolean,
}

export interface Message {
  id: number;
  value: string;
  user: User;
  time: Date
}

export interface Issue {
  id: number;
  title: string;
  link: string;
  priority: IssuePriority
}

export interface IssueData extends Issue {
  modeEdit: boolean,
  currentIssueId: number
}

export interface Result {
  [cardWeight: string]: number
}

export interface roundScore {
  numberRound: number;
  score: Result
}

export interface Game {
  id: string;
  inviteLink: string;
  settings: string; // TODO implement interface
  rounds: roundScore[];
  issues: Issue[];
  members: UserData[];
  messages: Message[];
  resultGame: Result;
}
