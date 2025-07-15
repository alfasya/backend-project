const request = require('supertest');
const app = require('../app');

describe('GET all users', () => {
    test('GET /users should return status code: 200', async () => {
        const result = await request(app).get('/users');

        expect(result.statusCode).toBe(200);
    });
});

describe('GET user by id', () => {
    test('GET /users should return status code: 200', async () => {
        const result = await request(app).get('/users/:id');

        expect(result.statusCode).toBe(200);
    });
});

describe('POST add user', () => {
    test('POST /users should return status code: 201', async () => {
        const result = await request(app)
            .post('/users/')
            .send({
                username : "username"
            });

        expect(result.statusCode).toBe(201);
    });
});