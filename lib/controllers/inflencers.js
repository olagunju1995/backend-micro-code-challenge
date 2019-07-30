"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var influencers = require('../mocks/influencers.json');
exports.getInfluencer = function (req, res) {
    var influencerId = parseInt(req.params.id);
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    else {
        influencers.forEach(function (influencer) {
            if (influencer.id === influencerId) {
                return res.status(200).json({
                    data: influencer,
                    success: true
                });
            }
        });
    }
};
exports.createInfluencer = function (req, res) {
    var errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        res.status(500).send({ errors: errors.array() });
    }
    else {
        var _a = req.body, igFollow = _a.igFollow, igID = _a.igID, fbID = _a.fbID, fbFollow = _a.fbFollow, ytFollow = _a.ytFollow, ytID = _a.ytID, fullName = _a.fullName, email = _a.email, phone = _a.phone, ownPromocode = _a.ownPromocode, refPromocode = _a.refPromocode, refName = _a.refName;
        var newInfluencer = {
            id: influencers.length + 1,
            igFollow: igFollow,
            igID: igID,
            fbID: fbID,
            fbFollow: fbFollow,
            ytFollow: ytFollow,
            ytID: ytID,
            fullName: fullName,
            email: email,
            phone: phone,
            ownPromocode: ownPromocode,
            refPromocode: refPromocode,
            refName: refName
        };
        influencers.push(newInfluencer);
        return res.status(201).json({
            sucess: true,
            influencerId: newInfluencer.id
        });
    }
};
