import { Octokit } from "@octokit/rest"
const octokit = new Octokit({
  // auth: "",
})
///using async and tru catch block to fetch response
export const getPublicGists = async () => {
  try {
    const response = await octokit.gists.listPublic({
      per_page: 10, // Number of Gists per page (maximum is 100)
      page: 1
    })
    const publicGists = response.data

    return publicGists
  } catch (error) {
    console.error(error)
    throw error
  }
}
///using async and tru catch block to fetch response

export const getGistForUser = async (username) => {
  try {
    const response = await octokit.gists.listForUser({ username: username })
    const singleGist = response.data
    return singleGist
  } catch (error) {
    throw error
  }
}
