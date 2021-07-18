import { UserInterface } from "./UserInterface";
import mongoose from "mongoose";

interface AccountInterface extends mongoose.Document {
  accountNo: string;
  accountType: string;
  user: UserInterface;
}

export { AccountInterface };
