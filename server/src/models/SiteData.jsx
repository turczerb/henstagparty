import mongoose from "mongoose";

const SiteDataSchema = new mongoose.Schema({
  nav_title: [{ type: String, required: true }],
  basic_nfo: [
    {
      date: { type: Date, required: ture },
      time: { type: Date, required: true },
      location: { type: String, required: true },
      infoLocation: { type: String, required: true },
    },
  ],
  getting_there: [
    {
      option: { type: String, required: true },
      details: { type: String, required: true },
    },
  ],
  program: [
    {
      time: { type: String, required: true },
      activity: { type: String, required: true },
    },
  ],
});

//table in the mongodbo will be named admin.
export const UserModel = mongoose.model("data", SiteDataSchema);
