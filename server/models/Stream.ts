import {z} from 'zod';
import mongoose from 'mongoose';
import {v4 as uuidv4} from 'uuid';

const streamSchema = new mongoose.Schema({
    uuid: {
        type: String,
        default: uuidv4,
        unique: true,
    },
    title: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value: string) => {
                return z.string().min(3).max(20).parse(value);
            },
            message: (props: any) => `${props.value} is not a valid title!`,
        },
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                return z.string().min(3).max(100).parse(value);
            }
        }
    },
    url: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                return z.string().url().parse(value);
            }
        }
    },
    thumbnail: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => {
                return z.string().url().parse(value);
            }
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
    isPrivate: {
        type: Boolean,
        required: true,
        default: false,
    },
    
},{timestamps: true});


streamSchema.statics.getStream = async function (uuid: string) {
    const stream = await this.findOne({uuid}).populate('user').populate('chat').populate('likes');
    if (!stream) throw new Error('Stream not found!');
    return stream;
}

streamSchema.statics.getAllStreams = async function () {
    const streams = await this.find({}).populate('user').populate('chat').populate('likes');
    return streams;
}

streamSchema.statics.getStreamsByUser = async function (user: string) {
    const streams = await this.find({user}).populate('user').populate('chat').populate('likes');
    if (!streams) throw new Error('No streams found!');
    return streams;
}

streamSchema.statics.getStreamsByTitle = async function (title: string) {
    const streams = await this.find({title}).populate('user').populate('chat').populate('likes');
    if (!streams) throw new Error('No streams found!');
    return streams;
}


export default mongoose.model('Stream', streamSchema);
