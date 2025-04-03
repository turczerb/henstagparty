import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
//router mire kell: lehetove teszi az utvonalak (routes) logikus elkuloniteset.
//kezeli a kereseket get,put,post,delete s az app.js vagy index.js nem zsufolt.

const router = express.Router();
export { router as userRouter };
