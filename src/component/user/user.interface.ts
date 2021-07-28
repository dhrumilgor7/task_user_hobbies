import { IUserDocument } from './user.model';


export interface IUserService {

    createUser(name:string):Promise<any>;

    getAllUser():Promise<any>

    deleteUser(id:string):Promise<any>;

    updateUser(userObject:IUserDocument):Promise<any>;    
}