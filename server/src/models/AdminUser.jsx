import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  role: { type: String, default: "admin" },
});

//table in the mongodbo will be named admin.
export const UserModel = mongoose.model("admin", AdminUserSchema);
