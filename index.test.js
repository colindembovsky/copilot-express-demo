const request = require('supertest');
const baseUrl = 'http://localhost:3000';

describe('GET /', () => {
    it('should return 200 OK', async () => {
        const res = await request(baseUrl).get('/');
        expect(res.statusCode).toEqual(200);
    })

    it('should return "Hello World!"', async () => {
        const res = await request(baseUrl).get('/');
        expect(res.text).toEqual('Hello World!');
    })

    it('should return 404 Not Found', async () => {
        const res = await request(baseUrl).get('/foo');
        expect(res.statusCode).toEqual(404);
    })
})

// test for the /repos/:username route
describe('GET /repos/:username', () => {
    it('should return 200 OK', async () => {
        const res = await request(baseUrl).get('/repos/colindembovsky');
        expect(res.statusCode).toEqual(200);
    })

    it('should return an array', async () => {
        const res = await request(baseUrl).get('/repos/colindembovsky');
        expect(Array.isArray(res.body)).toEqual(true);
    })
})