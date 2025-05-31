import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectToDB from "./db/db.js";
import userRouter from "./routes/user.routes.js";
import captainRouter from "./routes/captain.routes.js";
import cookieParser from "cookie-parser";

connectToDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());

app.get("/", (req,res) => {
    res.send("Hello World");
})

app.use("/api/v1/users", userRouter);
app.use("/api/v1/captain",captainRouter);

export default app;