const { expect } = require("chai");
const request = require('request');

describe('Index page', () => {
    it('check correct status code', (done) => {
        const options = {
            url: 'http://localhost:7865',
            method: 'GET',
        };

        request(options, function (error, response) {
            if (error) {
                done(error);
                return;
            }

            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('check correct content', (done) => {
        const options = {
            url: 'http://localhost:7865',
            method: 'GET',
        };

        request(options, function (error, response, body) {
            if (error) {
                done(error);
                return;
            }

            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('check correct content length', (done) => {
        const options = {
            url: 'http://localhost:7865',
            method: 'GET',
        };

        request(options, function (error, response) {
            if (error) {
                done(error);
                return;
            }

            expect(response.headers['content-length']).to.equal('29');
            done();
        });
    });
});
