import axios from 'axios';
import { WordpressAPI, WordpressAPISiteURLException } from './WordpressAPI';

// Mock the axios library.
jest.mock('axios', () => {
    const mockResponse = { item: 'MOCK_ITEM' };
    const request = jest.fn((...args) => Promise.resolve({ data: mockResponse }));

    return {
        default: {
            request,
            mockResponse,
        },
    };
});

// Setup.
const siteURL = 'https://mywebsite.com'
const baseURL = `${siteURL}/wp-json/wp/v2`;

describe('services/WordpressAPI', () => {
    it('throws an error if an api root url is provided', () => {
        expect.assertions(1);

        try {
            new WordpressAPI(baseURL);
        } catch (err) {
            expect(err instanceof WordpressAPISiteURLException).toBeTruthy();
        }
    });

    it('sets the baseUrl property', () => {
        const api = new WordpressAPI(siteURL);
        expect(api.baseURL).toEqual(baseURL);
    });

    describe('get()', () => {
        it('makes a GET request', async () => {
            const api = new WordpressAPI(siteURL);
            const url = '/posts';
            const params = { id: 4 };
            await api.get(url, params);
            expect(axios.request).toHaveBeenCalledWith({
                url,
                baseURL,
                params,
                method: 'get',
            });
        });

        it('returns a promise', () => {
            const api = new WordpressAPI(siteURL);
            const result = api.get('/posts');
            expect(result instanceof Promise).toBeTruthy();
        });

        it('resolves the value', async () => {
            const api = new WordpressAPI(siteURL);
            const result = await api.get('/posts');
            expect(result).toEqual((axios as any).mockResponse);
        });
    });
});

