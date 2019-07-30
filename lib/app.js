"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = __importDefault(require("./routes"));
//const influencers = require('./mocks/influencers.json');
var PORT = 8000;
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
routes_1.default(app);
app.listen(PORT, function () {
    console.log("server statrted at https://localhost:" + PORT);
});
exports.default = app;
