import PostService from './post'
import Axios from '../tools/axios'
const axios = new Axios();
export default {
        postService: new PostService(axios),
}
