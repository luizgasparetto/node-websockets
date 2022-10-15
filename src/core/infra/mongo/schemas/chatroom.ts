import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuid } from "uuid";

import { User } from "./user";

type Chatroom = Document & {
  id_users: User[];
  id_chatroom: String;
}

const ChatroomSchema = new Schema({
  id_users: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ],
  id_chatroom: {
    type: String,
    default: uuid()
  }
});

const chatroom = mongoose.model<Chatroom>("Chatrooms", ChatroomSchema);

export { chatroom };