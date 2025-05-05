import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: false },
  password: { type: String, require: true },
  isAdmin: { type: Boolean, default: false },
});
//table in the mongodbo will be named admin.
export const UserModel = mongoose.model("users", UserSchema);
