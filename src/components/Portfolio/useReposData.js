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
      created_at: "",
    },
  ]);
  const [reposState, setReposState] = useState("loading");

  useEffect(() => {
    const API_URL = "https://api.github.com/users/KrystianGreblowski/repos";
    const loadingDelay = 1000;

    const fetchRepos = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, loadingDelay));

        const response = await axios.get(API_URL);

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
