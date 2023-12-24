import { useState, useEffect } from "react";
import axios from "axios";

export const useReposData = () => {
  const [reposReceived, setReposReceived] = useState([{ name: "" }]);

  const compareDates = (firstDate, secondDate) => {
    const firstDateReceived = firstDate.dateCreated.getTime();
    const secondDateReceived = secondDate.dateCreated.getTime();

    return secondDateReceived - firstDateReceived;
  };

  const sortRepos = (repos) => {
    const reposSorted = repos.slice().sort(compareDates);

    return reposSorted;
  };

  useEffect(() => {
    // const accessToken = "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";

    const fetchRepos = async () => {
      try {
        //   const headers = {
        //     Authorization: `Bearer ${accessToken}`,
        //   };

        //   const response = await axios.get("https://api.github.com/user/repos", {
        //     headers,
        //   });

        const response = await axios.get(`${process.env.PUBLIC_URL}/data.json`);

        setReposReceived(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);

  const repos = reposReceived.map((repo) => ({
    nameRepo: repo.name,
    descriptionRepo: repo.description,
    demoLink: repo.homepage,
    codeLink: repo.html_url,
    dateCreated: new Date(repo.created_at),
  }));

  return sortRepos(repos);
};
