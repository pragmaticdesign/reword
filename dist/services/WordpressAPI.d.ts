import { AxiosRequestConfig } from 'axios';
import { iWordpressAPIService as iService } from '@/interfaces/services';
export declare class WordpressAPISiteURLException extends Error {
    __proto__: Error;
    constructor(message?: string);
}
export declare class WordpressAPI implements iService {
    protected _baseURL: string;
    get baseURL(): string;
    constructor(siteURL: string);
    get<iResult = any>(url: string, params?: Record<string, any>): Promise<iResult>;
    protected makeConfig(method: 'delete' | 'get' | 'post' | 'put', url: string, customConfig?: AxiosRequestConfig): AxiosRequestConfig;
}
declare const _default: WordpressAPI;
export default _default;
//# sourceMappingURL=WordpressAPI.d.ts.map