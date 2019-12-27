import { iPost, iPostsEndpointParams } from '@/interfaces/posts';
export interface iWordpressAPIService {
    readonly baseURL: string;
    get: <iResult = any>(url: string, params?: Record<string, any>) => Promise<iResult>;
}
export interface iPostsService {
    find: (id: number) => Promise<iPost>;
    get: (params?: iPostsEndpointParams) => Promise<iPost[]>;
}
//# sourceMappingURL=services.d.ts.map