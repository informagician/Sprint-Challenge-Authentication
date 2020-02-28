const request = require('supertest')

const server = require('../api/server')

describe('Auth Router', function(){
    it('should run tests', function(){
        expect(true).toBe(true)
    })

    describe('GET /jokes', function(){
        it('should return 400', function(){
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
                expect(res.type).toMatch(/json/)
            })
        })

        it('should return 200', function(){
            return request(server)
            .get('/api/jokes')
            .set({authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6ImFsaSIsImlhdCI6MTU4MjkyNjkxNCwiZXhwIjoxNTgyOTMwNTE0fQ.9I9oT62EvfAiJ32J2Nez03FSnixs79wrfWA6QifOeng'})
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.type).toMatch(/json/)
            })
        })
    })
})