import readMatches from './readMatches';

const groupMatches = [
  {
    team1: {
      name: 'A1',
      goals: 3,
    },
    team2: {
      name: 'A2',
      goals: 2,
    },
  },
  {
    team1: {
      name: 'A1',
      goals: 2,
    },
    team2: {
      name: 'A3',
      goals: 4,
    },
  },
  {
    team1: {
      name: 'A2',
      goals: 1,
    },
    team2: {
      name: 'A3',
      goals: 2,
    },
  },
];

const parsedMatches = [
  {
    A1: {
      points: 3,
      goals: 5,
    },
    A2: {
      points: 0,
      goals: 3,
    },
    A3: {
      points: 6,
      goals: 6,
    },
  },
];


describe('Rank groups', () => {
  test('Should return array of groups with teams ranked up', () => {
    expect(readMatches(groupMatches)).toEqual(parsedMatches[0]);
  });
});
