import mongoose from "mongoose";

interface AddressInterface extends mongoose.Document {
  country: String;
  city: String;
  modelOn: unknown;
  modelName: string;
}

export { AddressInterface };
