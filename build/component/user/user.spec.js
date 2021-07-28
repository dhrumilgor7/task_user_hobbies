"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = __importDefault(require("./user.service"));
require("mocha");
var chaiHttp = require('chai-http');
var server = require('../../index');
chai.use(chaiHttp);
describe('Create User', function () {
    it('should return User Object', function () {
        var result = user_service_1.default.createUser("Test User");
        chai.request(server)
            .post('/user/create')
            .send({ "name": "Test User" })
            .end(function (err, res) {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        });
    });
});
