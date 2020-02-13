const groupMatchesGenerator = (groups) => groups.map((group) => {
  const matchs = [];
  for (let i = 0; i < group.length; i++) {
    for (let j = 1; j < group.length; j++) {
      if (i !== j && i < j) {
        matchs.push([group[i], group[j]]);
      }
    }
  }
  return matchs;
});

export default groupMatchesGenerator;
