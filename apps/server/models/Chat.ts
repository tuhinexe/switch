import { z } from "zod";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const chatSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  messages: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      message: {
        type: String,
        required: true,
        validate: {
          validator: (value: string) => {
            return z.string().min(1).max(100).parse(value);
          },
        },
      },
    },
  ],
  stream: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stream",
  }
}, { timestamps: true});

chatSchema.statics.findByUuid = async function (uuid: string) {
  return await this.findOne({ uuid })
}

chatSchema.statics.getChatByStream = async function (stream: string) {
  const chat = await this.findOne({ stream })
  if (!chat) {
    throw new Error("Chat not found!");
  }
  return chat;
}

export default mongoose.model("Chat", chatSchema);
