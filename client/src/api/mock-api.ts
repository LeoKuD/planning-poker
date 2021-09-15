import { IssuePriority, UserRole } from 'types/common-types';

export const MOCK_API = [
  {
    id: 'IU43E',
    inviteLink: 'http://localhost:3000/IU43E',
    settings: 'settings', // TODO implement interface
    issues: [
      {
        id: 13,
        title: 'issue',
        link: 'http://localhost:3002/issues/13',
        priority: IssuePriority.low,
        roundScore: {
          numberRound: 1,
          score: {
            'sp-1': 0.2,
            'sp-2': 0.2,
            'sp-3': 0.5,
            'sp-5': 0,
            'sp-8': 0,
            'sp-13': 0.1,
            coffee: 0.1,
          },
        },
      },
      {
        id: 7,
        title: 'issue',
        link: 'http://localhost:3002/issues/7',
        priority: IssuePriority.middle,
        roundScore: {
          numberRound: 3,
          score: {
            'sp-1': 0.25,
            'sp-2': 0.25,
            'sp-3': 0.3,
            'sp-5': 0,
            'sp-8': 0,
            'sp-13': 0.1,
            coffee: 0.1,
          },
        },
      },
      {
        id: 17,
        title: 'issue',
        link: 'http://localhost:3002/issues/17',
        priority: IssuePriority.hight,
        roundScore: {
          numberRound: 1,
          score: {
            'sp-1': 0.05,
            'sp-2': 0.25,
            'sp-3': 0.5,
            'sp-5': 0,
            'sp-8': 0,
            'sp-13': 0.1,
            coffee: 0.1,
          },
        },
      },
      {
        id: 19,
        title: 'issue',
        link: 'http://localhost:3002/issues/19',
        priority: IssuePriority.middle,
        roundScore: {
          numberRound: 2,
          score: {
            'sp-1': 0,
            'sp-2': 0.151,
            'sp-3': 0.549,
            'sp-5': 0.161,
            'sp-8': 0,
            'sp-13': 0.1,
            coffee: 0.039,
          },
        },
      },
    ],
    members: [
      {
        id: 'DD44S',
        firstName: 'DANA',
        lastName: 'BY',
        role: UserRole.dealer,
        position: 'developer',
      },
      {
        id: 'DD45S',
        firstName: 'ARON',
        lastName: 'GOT',
        role: UserRole.player,
        position: 'developer',
      },
      {
        id: 'DG45S',
        firstName: 'ANI',
        lastName: '',
        role: UserRole.observer,
        position: 'developer',
      },
      {
        id: 'FD45S',
        firstName: 'FANT',
        lastName: 'LON',
        role: UserRole.player,
        position: 'developer',
      },
    ],
    messages: [],
    resultGame: {
      sp1: 0,
      sp2: 0.234,
      sp3: 0.543,
      sp5: 0.223,
      sp8: 0,
      sp13: 0,
      coffee: 0,
    },
  },
];
