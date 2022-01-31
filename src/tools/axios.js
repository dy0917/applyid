import axios from "axios";

export default class Axios {
    constructor(){
    }

    withAuth(){
        const reqInstance = axios.create({
            headers: {
                Authorization : `token ${process.env.VUE_APP_GIT_TOKEN}`
            }
          });
        return reqInstance;
    }

    withBasicAuth(){
        const reqInstance = axios.create({
            headers: {
                Authorization : `Basic ${process.env.VUE_APP_GIT_TOKEN}`
            }
          });
        return reqInstance;
    }

    withoutAuth(){
        const reqInstance = axios.create({});
        return reqInstance;
    }

}