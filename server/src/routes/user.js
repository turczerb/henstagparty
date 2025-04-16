import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../src/models/Users.js";
//router mire kell: lehetove teszi az utvonalak (routes) logikus elkuloniteset.
//kezeli a kereseket get,put,post,delete s az app.js vagy index.js nem zsufolt.

const router = express.Router();

router.post("/login", async (req, res) => {
  const { password } = req.body;
});

router.post("/userlogin");

export { router as userRouter };
