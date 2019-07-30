import { validationResult } from "express-validator";

const influencers = require('../mocks/influencers.json');


export const getInfluencer = (req, res) => {
    const influencerId = parseInt(req.params.id)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() });
    } else {
        influencers.forEach((influencer)=>{
            if(influencer.id === influencerId){
                  
              return res.status(200).json({
                       data:influencer,
                       success:true
               })
           }
        })
   
    }
};

export const createInfluencer = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(500).send({ errors: errors.array() });
    } else {
    const{igFollow,igID,fbID,fbFollow,ytFollow,ytID,fullName,email,phone,ownPromocode,refPromocode,refName} = req.body
    const newInfluencer ={
        id:influencers.length +1,
        igFollow,
        igID,
        fbID,
        fbFollow,
        ytFollow,
        ytID,
        fullName,
        email,
        phone,
        ownPromocode,
        refPromocode,
        refName
    }

    influencers.push(newInfluencer)
      
  
    return res.status(201).json({
    sucess: true,
    influencerId: newInfluencer.id
    })



   
    }
}



