import { IssuePriority, UserRole } from 'types/common-types';

export const MOCK_API = [
  {
    id: 'IU43E',
    inviteLink: 'http://localhost:3000/IU43E',
    settings: 'settings', // TODO implement interface
    rounds: [
      {
        numberRound: 1,
        score: {
          sp1: 0.2,
          sp2: 0.2,
          sp3: 0.5,
          sp5: 0,
          sp8: 0,
          sp13: 0.1,
          coffee: 0.1,
        },
      },
      {
        numberRound: 2,
        score: {
          sp1: 0,
          sp2: 0.2,
          sp3: 0.7,
          sp5: 0.1,
          sp8: 0,
          sp13: 0,
          coffee: 0,
        },
      },
      {
        numberRound: 3,
        score: {
          sp1: 0,
          sp2: 0.2,
          sp3: 0.6,
          sp5: 0.2,
          sp8: 0,
          sp13: 0,
          coffee: 0,
        },
      },
    ],
    issues: [
      {
        id: 13,
        title: 'issue',
        link: 'http://localhost:3002/issues/13',
        priority: IssuePriority.low,
      },
      {
        id: 7,
        title: 'issue',
        link: 'http://localhost:3002/issues/7',
        priority: IssuePriority.middle,
      },
      {
        id: 17,
        title: 'issue',
        link: 'http://localhost:3002/issues/17',
        priority: IssuePriority.hight,
      },
      {
        id: 19,
        title: 'issue',
        link: 'http://localhost:3002/issues/19',
        priority: IssuePriority.middle,
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
      sp2: 0.2,
      sp3: 0.6,
      sp5: 0.2,
      sp8: 0,
      sp13: 0,
      coffee: 0,
    },
  },
];
