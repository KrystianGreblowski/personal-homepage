const compareDates = (firstDate, secondDate) => {
  const firstDateReceived = firstDate.dateCreated.getTime();
  const secondDateReceived = secondDate.dateCreated.getTime();

  return secondDateReceived - firstDateReceived;
};

export const sortRepos = (repos) => {
  const reposSorted = repos.slice().sort(compareDates);

  return reposSorted;
};
