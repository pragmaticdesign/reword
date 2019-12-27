export interface iPaginatedEndpointParams {
    page?: number;
    per_page?: number;
    search?: string;
    order?: 'asc' | 'desc';
    offset?: number;
}
