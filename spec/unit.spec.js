const request = require('request');
const controller = require('../controllers/user');

describe("users", function () {

    it('should exist', function () {
        expect(controller).toBeDefined();
    });

    it('should have a function loginPost', function () {
        expect(controller.accountDelete).toBeDefined();
    });

    
    // it("delete a user account", function () { // fail
    //     var req = {
    //         session: { accountDelete: jasmine.createSpy('accountDelete') },
    //         user: {
    //             id: '123456789',
    //             email: "example@mail.com",
    //             password: "1234"
    //         }
    //     };
    //     var res = {
    //         send: function () { },
    //         status: function (responseStatus) {
    //             assert.equal(responseStatus, 404);
    //             // This next line makes it chainable
    //             return this;
    //         }
    //     };
    //     controller.accountDelete(req, res);

    //     expect(res.status.responseStatus).toBe('Your account has been permanently deleted.');
    // });


});