import GithubService from './github'
export default function(axios){
        return {
                githubService: new GithubService(axios),
        }

}
