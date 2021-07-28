import express from 'express';
import { UserRouter } from '../../component/user/user.controller';
import { HobbiesRouter } from '../../component/hobbies/hobbies.controller';
const router = express.Router();


router.use('/user',UserRouter);
router.use('/hobby',HobbiesRouter);


export { router as Routes }