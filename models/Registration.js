import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
{
  firstName: {
    type: String,
    required: true,
    trim: true
  },

  lastName: {
    type: String,
    required: true,
    trim: true
  },

  age: {
    type: Number,
    required: true,
    min: 1
  },

  gender: {
    type: String,
    enum: ["male", "female"],
    lowercase: true,
    required: true
  },

  address: {
    type: String,
    required: true,
    trim: true
  },

  phone: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  parish: {
    type: String,
    required: true,
    trim: true
  },

  shirtSize: {
    type: String,
    required: true
  },

  dietaryRestrictions: {
    type: String,
    trim: true
  },

  sponsorSouvenir: {
    type: String,
    enum: ["yes","no"],
    lowercase: true
  },

  bookedHotel: {
    type: String,
    enum: ["yes","no"],
    lowercase: true
  },

  /* TRANSPORTATION REQUIRED */
  needsTransport: {
    type: String,
    enum: ["arrival","departure","both","none"],
    required: true
  },

  flightNumber: {
    type: String,
    required: function () {
      return this.needsTransport !== "none";
    },
    trim: true
  },
  
  busDetails: {
    type: String,
    required: function () {
      return this.needsTransport !== "none";
    },
    trim: true
  },

  /* ARRIVAL FIELDS */

  arrivalDate: {
    type: Date,
    required: function () {
      return this.needsTransport === "arrival" || this.needsTransport === "both";
    }
  },

  arrivalTime: {
    type: String,
    required: function () {
      return this.needsTransport === "arrival" || this.needsTransport === "both";
    }
  },

  arrivalPeriod: {
    type: String,
    enum: ["AM","PM"],
    required: function () {
      return this.needsTransport === "arrival" || this.needsTransport === "both";
    }
  },

  /* DEPARTURE FIELDS */

  departureDate: {
    type: Date,
    required: function () {
      return this.needsTransport === "departure" || this.needsTransport === "both";
    }
  },

  departureTime: {
    type: String,
    required: function () {
      return this.needsTransport === "departure" || this.needsTransport === "both";
    }
  },

  departurePeriod: {
    type: String,
    enum: ["AM","PM"],
    required: function () {
      return this.needsTransport === "departure" || this.needsTransport === "both";
    }
  },

  needAssistance: {
    type: String,
    enum: ["yes","no"],
    lowercase: true
  },
  needShuttle: {
    type: String,
    enum: ["yes","no"],
    lowercase: true
  },

  paymentMethod: {
    type: String,
    enum: ["online","during participation"],
    lowercase: true,
    required: true
  }

},
{ timestamps: true }
);


const Registration = mongoose.model("Registration", registrationSchema);

export default Registration;