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

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/captains", captainRouter);

export default app;
