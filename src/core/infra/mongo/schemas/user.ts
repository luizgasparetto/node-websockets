import mongoose, { Document, Schema } from "mongoose";

type User = Document & {
  name: string;
  email: string;
  socket_id: string;
  avatar: string;
};

const UserSchema = new Schema({
  name: String,
  email: String,
  socket_id: String,
  avatar: String
});

const User = mongoose.model<User>("Users", UserSchema);

export { User };
