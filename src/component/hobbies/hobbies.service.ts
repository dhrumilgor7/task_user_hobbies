import HobbiesModel , { IHobbiesDocument } from './hobbies.model';
import UserModel from '../user/user.model';
import { IHobbyService } from './hobbies.interface';


class HobbyServices implements IHobbyService {
    async createHobby(hobby:string,userId:string) {
        const hobbyObject:IHobbiesDocument = await HobbiesModel.create(hobby);
        const userUpdate = await UserModel.updateOne({_id:userId},{$push:{"hobbies":hobbyObject._id}})
        return hobbyObject;
    }

    async updateHobby(hobby:IHobbiesDocument) {
        const hobbyObject = await HobbiesModel.updateOne({_id:hobby._id},hobby);
        return hobbyObject;
    }

    async deleteHobby(id:string,userId:string){
        const hobbyDelete = await UserModel.updateOne({_id:userId},{$pull:{ "hobbies" : id}});
        const hobbyObject = await HobbiesModel.findOneAndRemove({_id:id});
        return hobbyObject;
    }

    async getAllHobbiesByUser(id:string){        
        const hobbyObjects = await UserModel.find({_id:id}).populate('hobbies');        
        return hobbyObjects;
    }
}
export default new HobbyServices();