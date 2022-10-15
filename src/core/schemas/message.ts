import mongoose, { Schema, Document } from "mongoose";

type Message = Document & {
  to: string;
  text: string;
  created_at: Date;
  room_id: string;
}

const MessageSchema = new Schema({
  to: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  text: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  room_id: {
    type: String,
    ref: "ChatRoom"
  },
})

const message = mongoose.model<Message>("Messages", MessageSchema);

export { message };