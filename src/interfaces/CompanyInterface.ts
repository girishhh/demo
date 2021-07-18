import mongoose from "mongoose";
import { AddressInterface } from "./AddressInterface";

interface CompanyInterface extends mongoose.Document {
  name: String;
  subdomain: String;
  address: AddressInterface;
}

export { CompanyInterface };
