export default class UserService {
    constructor(axios, octokit){
        this.axios= axios;
        this.octokit= octokit;
    }

    async searchUsersByName(name){
        // const response = await this.octokit.request('GET /search/users', {
        //     q: `${name}+in:name`
        //   });
          const response = await this.axios.withAuth().get(`https://api.github.com/search/users?q=${name}+in:name&&access_token=${process.env.VUE_APP_GIT_TOKEN}`);
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
        // users/taylorotwell?username=taylorotwell
        // return this.axios.withAuth().get(`https://api.github.com/search/users/${name}?username=${name}`)
    }
}


