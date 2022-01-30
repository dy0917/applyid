import GithubService from './github'
export default function(axios, octokit){
        return {
                githubService: new GithubService(axios, octokit),
        }

}
