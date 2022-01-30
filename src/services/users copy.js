import { Octokit } from "octokit";
export default class UserService {
    constructor(axios){
        this.axios= axios;
        this.octokit= new Octokit({ auth: `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 ` });
    }
    async getPostById(id){
        console.log("asdfasfasf",id);
        return "dddd"+id;
    }

    async searchUsersByName(name){
        const b = await  this.octokit.request('GET /search/users', {
            q: `${name}+in:name`
          });
        return await this.axios.withoutAuth().get(`https://api.github.com/search/users?q=${name}+in:name`);
    }
    getByName(name){
        return this.axios.withoutAuth().get(`https://api.github.com/users/${name}`);
    }

    async getQueries(queries){
            return await Promise.all(queries);
    }
}


