import { useState, useEffect } from "react";
import axios from "axios";

export const useReposData = () => {
  const [reposReceived, setReposReceived] = useState([{ name: "" }]);

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
  }));

  console.log(repos);

  return repos;
};
