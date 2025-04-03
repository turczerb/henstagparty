//express will be here.
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { adminRouter } from "./routes/admin.js";
import { userRouter } from "./routes/user.js";
import { dataRouter } from "./routes/data.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // CORS engedélyezése
app.use(express.json()); // JSON body parser middleware

app.use("/auth_admin", adminRouter);
app.use("/auth_user", userRouter);
app.use("/data", dataRouter);

mongoose.connect(
  "mongodb+srv://turczerb:fUNQqohhUtKAijll@henparty.bhmh9m3.mongodb.net/henparty?retryWrites=true&w=majority&appName=henparty"
);

// Szerver indítása
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
