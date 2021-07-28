"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
var Joi = __importStar(require("joi"));
var createUserSchema = function (req, res, next) {
    var schema = Joi.object({
        name: Joi.string().required()
    });
    var valid = schema.validate(req.body);
    if (valid.error) {
        res.status(400).json({
            success: false,
            Error: valid.error.message
        });
    }
    else {
        next();
    }
};
exports.createUserSchema = createUserSchema;
var updateUserSchema = function (req, res, next) {
    var schema = Joi.object({
        _id: Joi.string().required(),
        name: Joi.string().required(),
        hobbies: Joi.array()
    });
    var valid = schema.validate(req.body);
    if (valid.error) {
        res.status(400).json({
            success: false,
            Error: valid.error.message
        });
    }
    else {
        next();
    }
};
exports.updateUserSchema = updateUserSchema;
var deleteUserSchema = function (req, res, next) {
    var schema = Joi.object({
        _id: Joi.string().required()
    });
    var valid = schema.validate(req.body);
    if (valid.error) {
        res.status(400).json({
            success: false,
            Error: valid.error.message
        });
    }
    else {
        next();
    }
};
exports.deleteUserSchema = deleteUserSchema;
