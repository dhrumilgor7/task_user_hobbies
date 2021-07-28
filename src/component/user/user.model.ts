import * as mongoose from 'mongoose';
 
export interface IUserDocument extends mongoose.Document {
    name: string,
    hobbies: []
};

const UserSchema = new mongoose.Schema({
    name: String,
    hobbies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HobbiesModel'
    }]    
});

export default mongoose.model<IUserDocument>('UserModel',UserSchema);