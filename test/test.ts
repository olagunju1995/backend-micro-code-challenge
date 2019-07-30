import app from '../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';


chai.use(chaiHttp);
const expect = chai.expect;


describe('unit test to get a specific influencer', () => {
  it('should return a specific influencer', () => {
    return chai.request(app).get('/api/v1/influencers/1')
      .then(res => {
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body.error).equal(undefined);
        chai.expect(res.body.success).equal(true);
      })
  })
})



describe('unit test to create an influencer', () => {
  it('should create an influencer', (done) => {
     chai.request(app)
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
      "refName": "Code Guy Referrer"})
      .then(res => {
        chai.expect(res.status).to.equal(201);
        chai.expect(res.body.error).equal(undefined);
        done();
      }).catch(done);
  })
})


