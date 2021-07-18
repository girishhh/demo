import mongoose from "mongoose";
import { CompanySchema } from "../schemas/CompanySchema";
import { CompanyInterface } from "src/interfaces/CompanyInterface";

const CompanyModel = mongoose.model<CompanyInterface>("Company", CompanySchema);

export { CompanyModel };
