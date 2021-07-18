import mongoose from "mongoose";
import { UserSchema } from "../schemas/UserSchema";
import { UserInterface } from "src/interfaces/UserInterface";

const UserModel = mongoose.model<UserInterface>("User", UserSchema);

export { UserModel };
