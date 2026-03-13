import express,{json} from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import createAdminIfNotExists from "./utils/createAdmin.js";

import authRoutes from "./routes/authRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";

dotenv.config();

const app = express();

connectDB();
await createAdminIfNotExists(); //Default credential setting

app.use(cors({
    origin:'*',
    credentials:true
}))

app.use(json());

app.use("/api/auth", authRoutes);
app.use("/api", registrationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});