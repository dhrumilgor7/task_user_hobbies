import * as mongoose from 'mongoose';
 
export interface IHobbiesDocument extends mongoose.Document {
    name: string,
    passionLevel: string,
    year: string
};

const HobbiesSchema = new mongoose.Schema({
    name: String,
    passionLevel: {
        type: String,
        enum: ['Low','Medium','High','Very-High']        
    },
    year: String
});

export default mongoose.model<IHobbiesDocument>('HobbiesModel',HobbiesSchema);