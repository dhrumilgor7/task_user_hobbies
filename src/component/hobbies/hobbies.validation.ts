import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

export const createHobbySchema = (req:Request,res:Response,next:NextFunction) => {
    const schema:Joi.Schema = Joi.object({
        passionLevel: Joi.string().required().valid('Low','Medium','High','Very-High'),
        name: Joi.string().required(),
        year: Joi.string().required(),
        userId: Joi.string().required()
    });
    const valid = schema.validate(req.body);
    if (valid.error) {
        res.status(400).json({
            success: false,          
            Error: valid.error.message
        });
    }  else {
        next();
    }    
};

export const updateHobbySchema = (req:Request,res:Response,next:NextFunction) => {
    const schema:Joi.Schema = Joi.object({
        _id: Joi.string().required(),
        passionLevel: Joi.string().required(),
        name: Joi.string().required(),
        year: Joi.string().required()
    });
    const valid = schema.validate(req.body);
    if (valid.error) {
        res.status(400).json({
          success: false,          
          Error: valid.error.message
        });
    } else {
        next();
    }
};

export const deleteHobbySchema = (req:Request,res:Response,next:NextFunction) => {
    const schema:Joi.Schema = Joi.object({
        _id: Joi.string().required(),
        userId: Joi.string().required()
    });
    const valid = schema.validate(req.body);
    if (valid.error) {
        res.status(400).json({
            success: false,          
            Error: valid.error.message
        });
    } else {
        next();
    }
};

export const findHobbiesByUserIdSchema = (req:Request,res:Response,next:NextFunction) => {
    const schema:Joi.Schema = Joi.object({
        userId: Joi.string().required()
    });
    const valid = schema.validate(req.body);
    if (valid.error) {
        res.status(400).json({
            success: false,          
            Error: valid.error.message
        });
    } else {
        next();
    }
};