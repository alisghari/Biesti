import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRoute from "./src/routes/user";
import itemRoute from "./src/routes/item";

let app = express();

app.use(express.json());

app.use(cors());
app.options("*", cors());

app.use("/users", userRoute);
app.use("/items",itemRoute);

const PORT = process.env.PORT || 8000;

const dbURL = "mongodb+srv://Elbob04:2208@cluster0.ezqep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
  dbURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.log("Error connecting to: " + dbURL);
    } else {
      console.log("Connected to: " + dbURL);
    }
  }
);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
