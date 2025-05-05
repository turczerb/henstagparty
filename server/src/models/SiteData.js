import mongoose from "mongoose";

const SiteDataSchema = new mongoose.Schema({
  basic_info: {
    date: { type: Date, required: true },
    time: { type: Date, required: true },
    location: { type: String, required: true },
    infoLocation: { type: String, required: true },
  },
  getting_there: [
    {
      option: { type: String, required: true },
      details: { type: String, required: true },
    },
  ],
  program: [
    {
      time: { type: String, required: true },
      prog_location: { type: String, required: true },
      activity: { type: String, required: true },
    },
  ],
});

//table in the mongodbo will be named admin.
export const SiteDataModel = mongoose.model("site_data", SiteDataSchema);
