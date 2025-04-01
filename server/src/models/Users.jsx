import mongoose from "mongoose";

const AdminUserSchema = new mongoose.Schema({
  password: { type: String, require: true },
  role: { type: String, default: "user" },
});

export const UserModel = mongoose.model("users", AdminUserSchema);
