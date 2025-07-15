const request = require('supertest');
const app = require('../app');

describe('GET all users', () => {
    test('GET /users should return status code: 200', async () => {
        const result = await request(app).get('/users');

        expect(result.statusCode).toBe(200);
    });
});

describe('GET user by id', () => {
    test('GET /users/:id should return status code: 200', async () => {
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

    test('Error POST /users should return status code: 500', async () => {
        const result = await request(app)
            .post('/users/')
            .send(undefined)

        expect(result.statusCode).toBe(500);
    });
});

describe('PUT update user', () => {
    test('PUT /users/:id should return status code: 200', async () => {
        const result = await request(app)
            .put('/users/:id')
            .send({
                username : "username"
            });

        expect(result.statusCode).toBe(200);
    });

    test('Error PUT /users/:id should return status code: 500', async () => {
        const result = await request(app)
            .put('/users/:id')
            .send(undefined);

        expect(result.statusCode).toBe(500);
    });
});

describe('DELETE user', () => {
    test('DELETE /users/:id should return status code: 200', async () => {
        const result = await request(app)
            .delete('/users/:id')

        expect(result.statusCode).toBe(200);
    });
});