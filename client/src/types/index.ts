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

export enum ButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
}

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
  role: UserRole;
  position?: string;
  avatar?: string
}

export interface UserData extends User {
  isYou?: boolean;
  showDeleteButton?: boolean
}

export interface Message {
  id: number;
  content: string;
  author: string;
  time?: Date
}

export interface IMessages {
  [messageId: number]: Message
}

export interface Issue {
  id: number;
  title: string;
  link: string;
  priority: IssuePriority;
}

export interface IssueData extends Issue {
  modeMaster? : boolean; // false - player mode, true - master mode
  masterSettingsMode?: boolean; // false - lobby, true - settings
  currentIssueId?: number
}

export interface Result {
  [cardWeight: string]: number
}

export interface RoundScore {
  numberRound: number;
  score: Result
}

export interface IButton {
  onClick: () => void;
  children: string;
  disabled?: boolean;
  type: ButtonTypes;
}

export interface ITimer {
  min?: number;
  sec?: number;
  mode?: boolean; // true - settings , false - game
  isRunningRound: boolean;
}

export interface IRoundControls {
  isRunning: boolean;
}

export interface Game {
  id: string;
  inviteLink: string;
  settings: string; // TODO implement interface
  issues: Issue[];
  members: UserData[];
  messages: Message[];
  resultGame: Result;
}

export type UserCreds = {
  email: string;
  password: string;
};

export type CurrentUser = {
  id: string;
  createdOn: Date;
  email: string;
  token?: string;
};

export type Action = {
  type: string;
  payload?: any;
};

export interface IStore {
  auth: IAuth;
}

export interface IAuth {
  currentUser: CurrentUser | null;
  err: any;
  isLoading: boolean;
}