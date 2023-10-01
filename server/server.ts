import * as dotenv from "dotenv";
dotenv.config({path: "dev.env"});
console.log("ENV : ", process.env.NODE_ENV);
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import  connectDB  from "./config/dbConfig";
import userRoutes from "./routes/userRoutes";

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: "http://localhost:3000", credentials: true}));

(async () => {
  await connectDB();
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
)();

app.use("/api/v1/users", userRoutes);

