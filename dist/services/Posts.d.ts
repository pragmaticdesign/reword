import { iWordpressAPIService, iPostsService } from '../interfaces/services';
import { iPost, iPostsEndpointParams } from '../interfaces/posts';
export declare class Posts implements iPostsService {
    api: iWordpressAPIService;
    constructor(api: iWordpressAPIService);
    find(id: number): Promise<iPost>;
    get(params?: iPostsEndpointParams): Promise<iPost[]>;
}
declare const _default: Posts;
export default _default;
//# sourceMappingURL=Posts.d.ts.map