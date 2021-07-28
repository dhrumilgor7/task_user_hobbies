import { Request, Response, NextFunction } from 'express';
import * as Joi from 'joi';

export const createUserSchema = (req:Request,res:Response,next:NextFunction) => {
    const schema:Joi.Schema = Joi.object({
        name: Joi.string().required()
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

export const updateUserSchema = (req:Request,res:Response,next:NextFunction) => {
    const schema:Joi.Schema = Joi.object({
        _id : Joi.string().required(),
        name: Joi.string().required(),
        hobbies: Joi.array()
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

export const deleteUserSchema = (req:Request,res:Response,next:NextFunction) => {
    const schema:Joi.Schema = Joi.object({
        _id: Joi.string().required()
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