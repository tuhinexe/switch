import {z} from 'zod';
import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';




const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                return z.string().max(20).parse(value);
            },
            message: (props: any) => `${props.value} is not a valid first name!`,
        },
    },
    lastName: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                return z.string().max(20).parse(value);
            },
            message: (props: any) => `${props.value} is not a valid last name!`,
        },
    },
    profileUrl: {
        type: String,
        
        validate: {
            validator: (value: string) => {
                return z.string().url().parse(value);
            },
            message: (props: any) => `${props.value} is not a valid url!`,
        },
    }
    ,
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                return z.string().email().parse(value);
            },
            message: (props: any) => `${props.value} is not a valid email address!`,
        },
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                return z.string().min(3).max(20).parse(value);
            },
            message: (props: any) => `${props.value} is not a valid username!`,
        },
    },
    dob: {
        type: Date,
        required: true,
        validate: {
            validator: (value: Date) => {
                return z.date().parse(value);
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                return z.string().min(8).parse(value);
            }
        }
    },
    about: {
        type: String,
        validate: {
            validator: (value: string) => {
                return z.string().min(3).max(100).parse(value);
            }
        }
    },
    streams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stream'
    }],
    likedStreams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stream'
    }]
     


},{timestamps: true});


userSchema.statics.findByEmail = async function (email: string) {
    return await this.findOne({email});
}

userSchema.statics.findByUserName = async function (userName: string) {
    return await this.findOne({userName});
}

const User = mongoose.model('User', userSchema);


export default User;
