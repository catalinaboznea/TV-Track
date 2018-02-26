const request = require('request');
const server = require('../server');

const endpoint1 = 'http://localhost:3000/shows';
const endpoint2 = 'http://localhost:3000/signup';

describe('shows', function () {
    it('should return 200 response code', function (done) {
        request.get(endpoint1, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    // it('should fail on POST', function (done) {
    //     request.post(endpoint1, {json: true, body: {}}, function (error, response) {
    //         expect(response.statusCode).toEqual(200);
    //         done();
    //     });
    // });
});

describe('signup', function () {
    it('should return 200 response code', function (done) {
        request.get(endpoint2, function (error, response) {
            expect(response.statusCode).toEqual(200);
            done();
        });
    });

    // it('should fail on POST', function (done) {
    //     request.post(endpoint2, {json: true, body: {}}, function (error, response) {
    //         expect(response.statusCode).toEqual(200);
    //         done();
    //     });
    // });
});