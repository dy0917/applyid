import { Octokit } from "octokit";
export default class UserService {
    constructor(axios){
        this.axios= axios;
        this.octokit= new Octokit({ auth: `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 ` });
    }
    async getPostById(id){
        return "dddd"+id;
    }

    async searchUsersByName(name){
        const response = await this.octokit.request('GET /search/users', {
            q: `${name}+in:name`
          });
        const {items} = response.data;
            const queries = items.map(item=>{
                return this.getByName(item.login);
            });
        const responses= await Promise.all(queries);
        return responses.map(r=>r.data);
    }
    getByName(name){

        return this.octokit.request(`GET /users/${name}`,{
            username: name
        });
    }
}


