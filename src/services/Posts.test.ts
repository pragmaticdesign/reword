import { Posts } from './Posts';

const mockPost = { id: 2, title: 'MOCK_TITLE', };

describe('services/Posts', () => {
    describe('find()', () => {
        it('makes an API request', () => {
            const api = {
                get: jest.fn(() => Promise.resolve(mockPost)),
            };
            const posts = new Posts(api as any);
            posts.find(2);
            expect(api.get).toHaveBeenCalledWith('/posts/2');
        });

        it('returns a promise', () => {
            const api = {
                get: jest.fn(() => Promise.resolve(mockPost)),
            };
            const posts = new Posts(api as any);
            const result = posts.find(2);
            expect(result instanceof Promise).toBeTruthy();
        });

        it('resolves to a post', async () => {
            const api = {
                get: jest.fn(() => Promise.resolve(mockPost)),
            };
            const posts = new Posts(api as any);
            const result = await posts.find(2);
            expect(result).toBe(mockPost);
        });
    });

    describe('get()', () => {
        it('makes an API request', () => {
            const api = {
                get: jest.fn(() => Promise.resolve([mockPost, mockPost])),
            };
            const posts = new Posts(api as any);
            const params = { page: 1, per_page: 2 };
            posts.get(params);
            expect(api.get).toHaveBeenCalledWith('/posts', params);
        });

        it('returns a promise', () => {
            const api = {
                get: jest.fn(() => Promise.resolve([mockPost, mockPost])),
            };
            const posts = new Posts(api as any);
            const result = posts.get();
            expect(result instanceof Promise).toBeTruthy();
        });

        it('resolves to an array of posts', async () => {
            const api = {
                get: jest.fn(() => Promise.resolve([mockPost, mockPost])),
            };
            const posts = new Posts(api as any);
            const result = await posts.get();
            expect(result).toEqual([mockPost, mockPost]);
        });
    });
});
