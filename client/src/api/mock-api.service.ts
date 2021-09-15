import { Message } from 'react-hook-form';
import { Issue, RoundScore, User } from 'types/common-types';
import { MOCK_API } from './mock-api';

export const getLobbyUsers = (sessionId: string): User[] => {
  const data = MOCK_API.find((item) => item.id === sessionId);
  if (!data) {
    console.log(`Game with sessionId = ${sessionId} not found`);
    return [];
  }
  return data.members;
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
