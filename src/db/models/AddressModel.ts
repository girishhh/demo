import mongoose from "mongoose";
import { AddressSchema } from "../schemas/AddressSchema";
import { AddressInterface } from "src/interfaces/AddressInterface";

const AddressModel = mongoose.model<AddressInterface>("Address", AddressSchema);

export { AddressModel };
