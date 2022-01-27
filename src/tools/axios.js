import axios from "axios";

export default class Axios {
    constructor(){
    }

    withAuth(){
        const reqInstance = axios.create({
            headers: {
                Authorization : `Bearer ${localStorage.getItem("access_token")}`
            }
          });
        return reqInstance;
    }

    withoutAuth(){
        const reqInstance = axios.create({});
        return reqInstance;
    }

}