import mongoose from "mongoose";
import { AccountSchema } from "../schemas/AccountSchema";
import { AccountInterface } from "src/interfaces/AccountInterface";

const AccountModel = mongoose.model<AccountInterface>("Account", AccountSchema);

export { AccountModel };
