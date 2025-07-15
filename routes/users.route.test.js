const request = require('supertest');
const app = require('../app');

describe('GET all users', () => {
    test('GET /users should return status code: 200', async () => {
        const result = await request(app).get('/users');

        expect(result.statusCode).toBe(200);
    });
});