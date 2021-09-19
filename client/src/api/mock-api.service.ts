import { Message } from 'react-hook-form';
import {
  Issue, RoundScore, User, UserRole,
} from 'types/common-types';
import { MOCK_API } from './mock-api';

export const getAllUsers = (sessionId: string): User[] => {
  const data = MOCK_API.find((item) => item.id === sessionId);
  if (!data) {
    console.log(`Game with sessionId = ${sessionId} not found`);
    return [];
  }
  return data.members;
};

export const getLobbyUsers = (sessionId: string): User[] => {
  const members = getAllUsers(sessionId);
  return members.filter((item) => item.role !== UserRole.dealer);
};

export const getSessionOwner = (sessionId: string): User => {
  const members = getAllUsers(sessionId);
  const owner = members.find((item) => item.role === UserRole.dealer);
  if (!owner) {
    console.log(`Owner for sessionId = ${sessionId} not found`);
    return {} as User;
  }
  return owner;
};

export const getLobbyIssues = (sessionId: string): Issue[] => {
  const data = MOCK_API.find((item) => item.id === sessionId);
  if (!data) {
    console.log(`Game with sessionId = ${sessionId} not found`);
    return [];
  }
  return data.issues;
};

export const getLobbyComments = (sessionId: string): Message[] => {
  const data = MOCK_API.find((item) => item.id === sessionId);
  if (!data) {
    console.log(`Game with sessionId = ${sessionId} not found`);
    return [];
  }
  return data.messages;
};

export const getSessionConfig = (sessionId: string): string => {
  const data = MOCK_API.find((item) => item.id === sessionId);
  if (!data) {
    console.log(`Game with sessionId = ${sessionId} not found`);
    return '';
  }
  return data.settings;
};

export const getRoundScore = (sessionId: string, issueId: number): RoundScore | undefined => {
  const data = MOCK_API.find((item) => item.id === sessionId);
  if (!data) {
    console.log(`Game with sessionId = ${sessionId} not found`);
    return {} as RoundScore;
  }
  const { issues } = data;
  const currentIssue = issues.find((item) => item.id === issueId);
  return currentIssue?.roundScore;
};
export const getCards = (sessionId: string): any[] => {
  const data = MOCK_API.find((item) => item.id === sessionId);
  if (!data) {
    console.log(`Game with sessionId = ${sessionId} not found`);
    return [];
  }
  return data.cards;
};
