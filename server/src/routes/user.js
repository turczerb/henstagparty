import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";
//router mire kell: lehetove teszi az utvonalak (routes) logikus elkuloniteset.
//kezeli a kereseket get,put,post,delete s az app.js vagy index.js nem zsufolt.

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username }); //find the user by pass

  //if we dont have user?
  if (!user) {
    return res.json({ message: "user doesnt exisit!" });
  }
  //user exist and the password matches with the poasword frot the database ?
  // bcrypt tells or helps us --> hash the password what user provides too and compare
  const isPasswordValid = await bcrypt.compare(password, user.password);

  //if its not valid
  if (!isPasswordValid) {
    return res.json({ message: "Password is Incorrect!" });
  }

  // if is correct--> start the login process with token
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

router.post("/admin_login", async (req, res) => {
  const { username, password } = req.body;
});

export { router as userRouter };
