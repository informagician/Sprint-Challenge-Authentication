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
            .set({authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6Im1pbG8iLCJpYXQiOjE1ODI5MDc3MDEsImV4cCI6MTU4MjkxMTMwMX0.olbsMJBzwIAkDGU2hM_xeA8aGk1vA6GjE2MVZ3u_Rx8'})
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.type).toMatch(/json/)
            })
        })
    })
})