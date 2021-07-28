"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var express_1 = __importDefault(require("express"));
var user_controller_1 = require("../../component/user/user.controller");
var hobbies_controller_1 = require("../../component/hobbies/hobbies.controller");
var router = express_1.default.Router();
exports.Routes = router;
router.use('/user', user_controller_1.UserRouter);
router.use('/hobby', hobbies_controller_1.HobbiesRouter);
