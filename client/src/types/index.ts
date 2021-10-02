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

enum SessionStage {
  connect = 'connect',
  auth = 'auth',
  lobby = 'lobby',
  game = 'game',
  results = 'results',
}

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
  role?: UserRole;
  position?: string;
  avatar?: string;
  isAdmin?: boolean;
  isObserver?: boolean;
}

export interface UserData extends User {
  isYou?: boolean;
  showDeleteButton?: boolean
}

interface Settings {
  roundTime: number;
  useTimer: boolean;
  scoreType: string;
  autoRevealingCards: boolean;
  scoreTypeShort: string;
  cardSet: number[];
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

export interface Round {
  isStarted: boolean,
  currentIssueId: null | string,
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

// TODO delete later
export interface Card {
  id: number;
  shortName: string;
  cardScore: number;
}

// TODO delete later
export interface Game {
  id: string;
  inviteLink: string;
  settings: string; // TODO implement interface
  issues: Issue[];
  members: UserData[];
  messages: Message[];
  resultGame: Result;
}

export type Action = {
  type: string;
  payload?: any;
};

export interface IStore {
  session: APP_CLIENT;
}

export interface APP_CLIENT {
  ownerId: string | null;
  userId: string | null;
  issues: Issue[];
  members: User[];
  chat?: Message[];
  // sessionSettings?: Settings;
  sessionSettings?: any;
  id: string | null;
  sessionTitle: string;
  sessionStage?: SessionStage | null;
  inviteLink: string | null;
  round?: Round;
}
