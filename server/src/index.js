//express will be here.
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors()); // CORS engedélyezése
app.use(express.json()); // JSON body parser middleware

// Szerver indítása
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
