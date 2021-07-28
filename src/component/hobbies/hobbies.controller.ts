import { Router, Request, Response, NextFunction } from 'express';
import HobbyServices  from './hobbies.service';
import { createHobbySchema, updateHobbySchema, deleteHobbySchema, findHobbiesByUserIdSchema } from './hobbies.validation';

const router = Router();


router.post('/',findHobbiesByUserIdSchema,async (req:Request,res:Response) =>  {
    try {
        const data = await HobbyServices.getAllHobbiesByUser(req.body.userId);
        res.status(200).json({
            success: true,
            message: 'Hobby list',
            data: data
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});



router.post('/create', createHobbySchema ,async (req:Request,res:Response) =>  {
    try {
        const hobbyObject = req.body;
        const userId = req.body.userId
        delete hobbyObject.userId;
        const data = await HobbyServices.createHobby(hobbyObject,userId);
        res.status(200).json({
            success: true,
            message: 'Hobby Created Successfully',
            data: data
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});


router.post('/update', updateHobbySchema, async (req:Request,res:Response) =>  {
    try {
        const data = await HobbyServices.updateHobby(req.body);
        res.status(200).json({
            success: true,
            message: 'Hobby Updated Successfully'
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});


router.post('/delete', deleteHobbySchema, async (req:Request,res:Response) =>  {
    try {
        const data = await HobbyServices.deleteHobby(req.body._id,req.body.userId);
        res.status(200).json({
            success: true,
            message: 'Hobby Deleted Successfully',
            data: data
        }); 
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err?.message ? err.message : 'Internal Server error.'
        });
    }
});
    
export { router as HobbiesRouter};