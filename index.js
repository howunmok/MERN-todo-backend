import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

import routes from "./src/routes/index.js";
import { connectToMongo } from "./src/config/mongoose.js";

// use imports
const app = express();
app.use(bodyParser.json());
app.use(cors());

// define routes
app.use("/api", routes);

// connect db
// set port no.
const port = process.env.PORT || 5002;
// connect to db
try {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`server is running on the port: ${port}`);
  });
} catch (err) {
  console.log(err);
}
