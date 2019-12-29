import { iPost, iPostsEndpointParams } from '../interfaces/posts';

export interface iWordpressAPIService {
    /**
     * The base API url.
     */
    readonly baseURL: string;
    
    /**
     * Makes a GET request to the API.
     * 
     * @param {string} url
     * @param {Record<string, any>=}
     * @returns {Promise<iResult = any>}
     */
    get: <iResult = any>(url: string, params?: Record<string, any>) => Promise<iResult>;
}

export interface iPostsService {
    /**
     * Finds a single post by its' ID.
     * 
     * @returns {Promise<iPost>}
     */
    find: (id: number) => Promise<iPost>;

    /**
     * Retrieves a set of posts.
     * 
     * @returns {Promise<iPost[]>}
     */
    get: (params?: iPostsEndpointParams) => Promise<iPost[]>;
}
