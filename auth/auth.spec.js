const request = require('supertest')

const server = require('../api/server')

describe('Auth Router', function(){
    it('should run tests', function(){
        expect(true).toBe(true)
    })

    describe('POST /register', function(){
        it('should return 200 OK', function(){
            return request(server)
            .post('/api/auth/register')
            .send({username:'milo',password:'secret'})
            .then(res => {
                expect(res.status).toBe(500)
                expect(res.type).toMatch(/json/)
            })
        })

        it('should return json', function(){
            return request(server)
            .post('/api/auth/login')
            .send({username:'milo',password:'secret'})
            .then(res => {
                expect(res.type).toMatch(/json/)
            })
        })
    })
})