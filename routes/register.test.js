const request = require('supertest');
const app = require('app');

describe('REGISTER Testing API', () => {
    test('Should return status code 201', async () => {
        const res = await request(app).post('/register');

        expect(res.statusCode).toBe(201);
    });
});