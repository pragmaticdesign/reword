export interface iPost {
    id: number;
    date: string; // iso date
    date_gmt: string; // iso date
    guid: {
        rendered: string; // url
    };
    modified: string; // iso date
    modified_gmt: string; // iso date
    slug: string;
    status: 'publish'; // @todo define other options
    type: 'post';
    link: string; // url
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
    comment_status: 'open'; // @todo define other options
    ping_status: 'open'; // @todo define other options
    sticky: boolean;
    template: string;
    format: 'standard'; // @todo define other options
    meta: any[]; // @todo define type
    categories: number[];
    tags: any[]; // @todo define type
    links: {}; // @todo define
}
