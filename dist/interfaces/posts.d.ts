import { iPaginatedEndpointParams } from './api';
export interface iPost {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: 'publish';
    type: 'post';
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: 'open';
    ping_status: 'open';
    sticky: boolean;
    template: string;
    format: 'standard';
    meta: any[];
    categories: number[];
    tags: any[];
    links: {};
}
export interface iPostsEndpointParams extends iPaginatedEndpointParams {
    context?: 'view' | 'embed' | 'edit';
    author?: number;
    author_exclude?: number;
    before?: string;
    exclude?: number[];
    include?: number[];
    orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'include_slugs' | 'title';
    status?: 'publish';
    categories?: number[];
    categories_exclude?: number[];
    tags?: number[];
    tags_exclude?: number[];
    sticky?: boolean;
}
//# sourceMappingURL=posts.d.ts.map