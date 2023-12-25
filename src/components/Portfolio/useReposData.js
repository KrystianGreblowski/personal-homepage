import { useState, useEffect } from "react";
import axios from "axios";

export const useReposData = () => {
  const [reposReceived, setReposReceived] = useState([
    {
      name: "",
      description: "",
      homepage: "",
      html_url: "",
      created_at: "2023-05-28T09:46:16Z",
    },
  ]);
  const [reposState, setReposState] = useState("loading");

  const compareDates = (firstDate, secondDate) => {
    const firstDateReceived = firstDate.dateCreated.getTime();
    const secondDateReceived = secondDate.dateCreated.getTime();

    return secondDateReceived - firstDateReceived;
  };

  const sortRepos = (repos) => {
    const reposSorted = repos.slice().sort(compareDates);

    return reposSorted;
  };

  // const accessToken = " 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";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // const headers = {
        //   Authorization: `Bearer ${accessToken}`,
        // };

        // const response = await axios.get("https://api.github.com/user/repos", {
        //   headers,
        // });

        const response = await axios.get(`${process.env.PUBLIC_URL}/data.json`);

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        setReposState("done");
        setReposReceived(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setReposState("error");
      }
    };

    fetchRepos();
  }, []);

  // console.log(reposReceived);

  const repos = reposReceived.map((repo) => ({
    nameRepo: repo.name,
    descriptionRepo: repo.description,
    demoLink: repo.homepage,
    codeLink: repo.html_url,
    dateCreated: new Date(repo.created_at),
  }));

  const reposSorted = sortRepos(repos);

  return { reposSorted, reposState };
};
