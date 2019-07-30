import  * as express from 'express';
import {getInfluencer,createInfluencer} from '../controllers/inflencers'
import{apiLimiter} from '../middlewares/middleware'

const { check } = require ('express-validator');

var router = express.Router()
  //endpoint to create a influencer
  router.post('/', 
  [check('email', 'must be a valid email').isEmail(),
   check('phone').isInt(),
],apiLimiter,createInfluencer);
  
   //endpoint to get influencers
  router.get('/:id', getInfluencer);
 
     
  
  export default router;
  
