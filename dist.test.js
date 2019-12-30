const reword = require('./dist/index.js');
const { Posts, WordpressAPI } = reword;

describe('dist', () => {
    it('exports an object', () => {
        expect(typeof reword).toBe('object');
    });

    it('exports Posts', () => {
        expect(Posts).toBeTruthy();
        expect(typeof Posts).toBe('function');
    });

    it('exports WordpressAPI', () => {
        expect(WordpressAPI).toBeTruthy();
        expect(typeof WordpressAPI).toBe('function');
    });
});
