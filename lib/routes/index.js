"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var influencers_routes_1 = __importDefault(require("./influencers_routes"));
var router = function (app) {
    app.use('/api/v1/influencers', influencers_routes_1.default);
};
exports.default = router;
