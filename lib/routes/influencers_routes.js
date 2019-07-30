"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var inflencers_1 = require("../controllers/inflencers");
var middleware_1 = require("../middlewares/middleware");
var check = require('express-validator').check;
var router = express.Router();
//endpoint to create a influencer
router.post('/', [check('email', 'must be a valid email').isEmail(),
    check('phone').isInt(),
], middleware_1.apiLimiter, inflencers_1.createInfluencer);
//endpoint to get influencers
router.get('/:id', inflencers_1.getInfluencer);
exports.default = router;
