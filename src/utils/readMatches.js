const winLooseOrDraw = (goalsTeam1, goalsTeam2) => {
  if (goalsTeam1 > goalsTeam2) return [3, 0];
  if (goalsTeam2 > goalsTeam1) return [0, 3];
  return [1, 1];
};

const scoreTeams = ({ team1, team2 }) => {
  const [pointsTeam1, pointsTeam2] = winLooseOrDraw(team1.goals, team2.goals);
  return [
    { points: pointsTeam1, goals: team1.goals },
    { points: pointsTeam2, goals: team2.goals },
  ];
};

const readMatches = (matches) => {
  const teams = {};
  matches.forEach(({ team1, team2 }) => {
    const [team1Scored, team2Scored] = scoreTeams({ team1, team2 });
    const team1InTeams = teams[team1.name];
    const team2InTeams = teams[team2.name];
    teams[team1.name] = team1InTeams
      ? {
        points: team1InTeams.points + team1Scored.points,
        goals: team1InTeams.goals + team1Scored.goals,
      } : team1Scored;
    teams[team2.name] = team2InTeams
      ? {
        points: team2InTeams.points + team2Scored.points,
        goals: team2InTeams.goals + team2Scored.goals,
      } : team2Scored;
  });
  return teams;
};

export default readMatches;
