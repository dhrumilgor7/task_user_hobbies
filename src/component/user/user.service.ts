import UserModel, { IUserDocument } from './user.model';
import { IUserService } from './user.interface';


class UserServices implements IUserService {
    async createUser(name:string) {
        const userObject:IUserDocument = await UserModel.create({name});
        return userObject;
    }

    async updateUser(user:IUserDocument) {
        const userObject = await UserModel.updateOne({_id:user._id},user);
        return userObject;
    }

    async deleteUser(id:string){
        const userObject = await UserModel.findOneAndRemove({_id:id});
        return userObject;
    }

    async getAllUser(){
        const userObjects = await UserModel.find({});
        return userObjects;
    }
}

export default new UserServices();