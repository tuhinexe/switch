import * as dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/dbConfig";
import userRoutes from "./routes/userRoutes";
import reqLogger, { Logger } from "./middlewares/logger";

const app: Application = express();
const logger = new Logger();
const port = process.env.PORT || 5000;
logger.success(`ENV: ${process.env.NODE_ENV}`);

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

(async () => {
  await connectDB();
  app.listen(port, () => logger.success(`Server running on port ${port}`));
})();

app.use(reqLogger);

app.get("/", (req, res) => {
  res.json({ message: "Switch API version 1.0" });
});

app.use("/api/v1/users", userRoutes);
