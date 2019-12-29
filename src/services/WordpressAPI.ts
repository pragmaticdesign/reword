import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { iWordpressAPIService as iService } from '../interfaces/services';

export class WordpressAPISiteURLException extends Error {
    __proto__: Error;

    constructor(message?: string) {
        const trueProto = new.target.prototype;
        super(message);
        this.__proto__ = trueProto;
    }
}

export class WordpressAPI implements iService {
    protected _baseURL: string;

    /**
     * Read-only access to the base API url.
     */
    get baseURL(): string {
        return this._baseURL;
    }

    constructor(siteURL: string) {
        if (siteURL.includes('wp-json')) {
            throw new WordpressAPISiteURLException('The first argument passed to WordpressAPI should be the site root, not the api root.');
        }

        this._baseURL = `${siteURL}/wp-json/wp/v2`;
    }

    /**
     * Makes a GET request to the API.
     * 
     * @param {string} url
     * @param {Record<string, any>=}
     * @returns {Promise<iResult = any>}
     */
    public async get<iResult = any>(url: string, params?: Record<string, any>): Promise<iResult> {
        try {
            const result = await axios.request(this.makeConfig('get', url, { params }));
            return Promise.resolve(result.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    /**
     * Makes a new axios instance and sets any default config.
     * 
     * @param {string} url
     * @param {'delete' | 'get' | 'post' | 'put'} method
     * @param {AxiosRequestConfig} customConfig
     * @return {AxiosInstance}
     */
    protected makeConfig(
        method: 'delete' | 'get' | 'post' | 'put',
        url: string,
        customConfig?: AxiosRequestConfig
    ): AxiosRequestConfig {
        const config: AxiosRequestConfig = {
            ...customConfig,
            baseURL: this.baseURL,
            method,
            url,
        };

        return config;
    }
}

export default new WordpressAPI('https://example.com');
