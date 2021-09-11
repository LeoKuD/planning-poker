import { uuid } from 'react-uuid';

export interface User {
  id: uuid;
  firstName: string,
  lastName?: string,
  role: boolean,
  position?: string,
  avatar?: string
}

export interface UserData extends User {
  isYou: boolean,
  showDeleteButton: boolean
}
