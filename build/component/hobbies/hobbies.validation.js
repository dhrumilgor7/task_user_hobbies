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
exports.findHobbiesByUserIdSchema = exports.deleteHobbySchema = exports.updateHobbySchema = exports.createHobbySchema = void 0;
var Joi = __importStar(require("joi"));
var createHobbySchema = function (req, res, next) {
    var schema = Joi.object({
        passionLevel: Joi.string().required().valid('Low', 'Medium', 'High', 'Very-High'),
        name: Joi.string().required(),
        year: Joi.string().required(),
        userId: Joi.string().required()
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
exports.createHobbySchema = createHobbySchema;
var updateHobbySchema = function (req, res, next) {
    var schema = Joi.object({
        _id: Joi.string().required(),
        passionLevel: Joi.string().required(),
        name: Joi.string().required(),
        year: Joi.string().required()
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
exports.updateHobbySchema = updateHobbySchema;
var deleteHobbySchema = function (req, res, next) {
    var schema = Joi.object({
        _id: Joi.string().required(),
        userId: Joi.string().required()
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
exports.deleteHobbySchema = deleteHobbySchema;
var findHobbiesByUserIdSchema = function (req, res, next) {
    var schema = Joi.object({
        userId: Joi.string().required()
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
exports.findHobbiesByUserIdSchema = findHobbiesByUserIdSchema;
