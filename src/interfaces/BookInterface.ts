import mongoose from "mongoose";
import { UserInterface } from "./UserInterface";

interface BookInterface extends mongoose.Document {
  title: string;
  owner: UserInterface;
}

export { BookInterface };
