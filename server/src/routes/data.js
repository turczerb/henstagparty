import { SiteDataModel } from "../models/SiteData.js";
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
//router mire kell: lehetove teszi az utvonalak (routes) logikus elkuloniteset.
//kezeli a kereseket get,put,post,delete s az app.js vagy index.js nem zsufolt.

const router = express.Router();

//get router API req and give back from the database.

router.get("/", async (req, res) => {
  try {
    const response = await SiteDataModel.find({});
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

//create so POSt
router.post("/", async (req, res) => {
  const theadata = new SiteDataModel(req.body);
  try {
    const response = await theadata.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

//save we need the put req
router.put("/", async (req, res) => {
  try {
    const response = await theadata.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

export { router as dataRouter };
