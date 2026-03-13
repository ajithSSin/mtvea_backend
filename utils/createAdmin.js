import bcrypt from "bcrypt";
import Admin from "../models/Admin.js";

const createAdminIfNotExists = async () => {
  try {

    const existingAdmin = await Admin.findOne({
      email: "admin@email.com"
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("Password@1", 10);

    await Admin.create({
      email: "admin@email.com",
      password: hashedPassword
    });

    console.log("Default Admin Created");

  } catch (error) {
    console.error("Admin initialization failed:", error);
  }
};

export default createAdminIfNotExists;