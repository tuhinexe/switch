import {z} from 'zod';
import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true});

userSchema.statics.findByUuid = async function (uuid: string) {
    return await this.findOne({uuid});
}

export default mongoose.model('Like', userSchema);