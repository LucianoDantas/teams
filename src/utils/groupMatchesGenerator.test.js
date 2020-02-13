import groupMatchesGenerator from './groupMatchesGenerator';

const groups = [
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3'],
  ['D1', 'D2', 'D3'],
];

const groupMatches = [
  [['A1', 'A2'],
    ['A1', 'A3'],
    ['A2', 'A3']],
  [['B1', 'B2'],
    ['B1', 'B3'],
    ['B2', 'B3']],
  [['C1', 'C2'],
    ['C1', 'C3'],
    ['C2', 'C3']],
  [['D1', 'D2'],
    ['D1', 'D3'],
    ['D2', 'D3']],
];

describe('Generate group matches', () => {
  test('Should return array of matches', () => {
    expect(groupMatchesGenerator(groups)).toStrictEqual(groupMatches);
  });
});
