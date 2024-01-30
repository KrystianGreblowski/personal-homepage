import { useState, useEffect } from "react";
import axios from "axios";
import { sortRepos } from "./sortRepos";

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

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        const response = await axios.get(
          "https://api.github.com/users/KrystianGreblowski/repos"
        );

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        setReposState("done");
        setReposReceived(response.data);
      } catch (error) {
        setReposState("error");
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

  const reposSorted = sortRepos(repos);

  return { reposSorted, reposState };
};
