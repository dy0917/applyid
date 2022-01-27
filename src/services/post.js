export default class PostService {
    constructor(axios){
        this.axios= axios;
    }
    async getPostById(id){
        console.log("asdfasfasf",id);
        return "dddd"+id;
    }

}