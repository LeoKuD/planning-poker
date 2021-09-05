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
