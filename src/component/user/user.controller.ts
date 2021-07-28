import { Router, Request, Response, NextFunction } from 'express';
import UserService  from './user.service';
import { createUserSchema, updateUserSchema, deleteUserSchema } from './user.validation';

const router = Router();


router.get('/',async (req:Request,res:Response) =>  {
    try {
        const data = await UserService.getAllUser();
        res.status(200).json({
            success: true,
            message: 'User list',
            data: data
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});



router.post('/create', createUserSchema,async (req:Request,res:Response) =>  {
    try {
        const data = await UserService.createUser(req.body.name);
        res.status(200).json({
            success: true,
            message: 'User Created Successfully',
            data: data
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});


router.post('/update', updateUserSchema, async (req:Request,res:Response) =>  {
    try {
        const data = await UserService.updateUser(req.body);
        res.status(200).json({
            success: true,
            message: 'User Updated Successfully'
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});


router.post('/delete', deleteUserSchema, async (req:Request,res:Response) =>  {
    try {
        const data = await UserService.deleteUser(req.body._id);
        res.status(200).json({
            success: true,
            message: 'User Deleted Successfully',
            data: data
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});
    
export { router as UserRouter};