const compareDates = (firstDate, secondDate) => {
  const firstDateReceived = firstDate.dateCreated.getTime();
  const secondDateReceived = secondDate.dateCreated.getTime();

  return secondDateReceived - firstDateReceived;
};

export const sortRepos = (repos) => {
  const filteredRepos = repos.filter((repo) => repo.demoLink !== "");

  const reposSorted = filteredRepos.slice().sort(compareDates);

  return reposSorted;
};
