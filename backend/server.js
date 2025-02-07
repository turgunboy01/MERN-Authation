import express from "express";
import { connectDB } from "./db/connectDb.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});
