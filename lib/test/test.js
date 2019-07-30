"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("../app"));
var chai = __importStar(require("chai"));
var chaiHttp = require("chai-http");
require("mocha");
chai.use(chaiHttp);
var expect = chai.expect;
describe('unit test to get a specific influencer', function () {
    it('should return a specific influencer', function () {
        return chai.request(app_1.default).get('/api/v1/influencers/1')
            .then(function (res) {
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.error).equal(undefined);
            chai.expect(res.body.success).equal(true);
        });
    });
});
describe('unit test to create an influencer', function () {
    it('should create an influencer', function (done) {
        chai.request(app_1.default)
            .post('/api/v1/influencers')
            .send({
            "igFollow": "5k-20k",
            "igID": "@testInfluencer",
            "fbID": "CodeChallengeGuy",
            "fbFollow": "0-5k",
            "ytFollow": "0-5k",
            "ytID": "CodeChallengeGuy",
            "fullName": "Code Challenge",
            "email": "codeChallengeGuy@viiva.com",
            "phone": "+1111111",
            "ownPromocode": "winthecode",
            "refPromoCode": "viivadevteam",
            "refName": "Code Guy Referrer"
        })
            .then(function (res) {
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body.error).equal(undefined);
            done();
        }).catch(done);
    });
});
