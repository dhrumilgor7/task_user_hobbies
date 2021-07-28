import { IHobbiesDocument } from './hobbies.model';


export interface IHobbyService {

    createHobby(name:string,userId:string):Promise<any>;
    
    updateHobby(hobbyObject:IHobbiesDocument):Promise<any>;    

    deleteHobby(id:string,userId:string):Promise<any>;
    
    getAllHobbiesByUser(userId:string):Promise<any>
}