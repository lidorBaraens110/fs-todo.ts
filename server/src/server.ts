import express from "express";
import todo from "./routes/todo";
import user from "./routes/user";
import cors from "cors";
import mongoose from "mongoose";
import "./config";
const app = express();
const atlasUri = process.env.ATLAS_URI!;

mongoose.connect(atlasUri).then(() => {
  console.log("db connected");
});

app.use(express.json());
app.use(cors());
app.use("/todo", todo);
app.use("/user", user);

app.listen(5000, () => {
  console.log("server up");
});
