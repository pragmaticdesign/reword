import { iWordpressAPIService, iPostsService } from '@/interfaces/services';
import { iPost, iPostsEndpointParams } from '@/interfaces/posts';
import WordpressAPI from './WordpressAPI';

export class Posts implements iPostsService {
    /**
     * The API service instance we use to make requests.
     */
    api: iWordpressAPIService;

    constructor(api: iWordpressAPIService) {
        this.api = api;
    }

    /**
     * Finds a single post by its' ID.
     * 
     * @returns {Promise<iPost>}
     */
    public async find(id: number): Promise<iPost> {
        try {
            const result = await this.api.get(`/posts/${id}`);
            return Promise.resolve(result);
        } catch (err) {
            throw err;
        }
    }

    /**
     * Retrieves a set of posts.
     * 
     * @returns {Promise<iPost[]>}
     */
    public async get(params?: iPostsEndpointParams): Promise<iPost[]> {
        try {
            const result = await this.api.get('/posts', params);
            return Promise.resolve(result);
        } catch (err) {
            throw err;
        }
    }
}

export default new Posts(WordpressAPI);
