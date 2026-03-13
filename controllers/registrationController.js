import Registration from "../models/Registration.js";

/* CREATE REGISTRATION */
export const createRegistration = async (req, res) => {
  try {

    const registration = new Registration(req.body);

    const savedData = await registration.save();

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      data: savedData
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message
    });

  }
};


/* GET ALL PARTICIPANTS (ADMIN) */
export const getAllRegistrations = async (req, res) => {

  try {

    const registrations = await Registration.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: registrations.length,
      data: registrations
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch registrations",
      error: error.message
    });

  }

};