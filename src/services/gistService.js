import { Octokit } from "@octokit/rest";
const octokit = new Octokit({
  auth: process.env?.GIT_TOKEN,
});

// export const getPublicGists = () => octokit.gists.listPublic()
export const getPublicGists = async () => {
  try {
    const response = await octokit.gists.listPublic();
    const publicGists = response.data;

    return publicGists;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getGistForUser = async (username) => {
  try {
    const response = await octokit.gists.listForUser({ username: username });
    const singleGist = response.data;
    return singleGist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
