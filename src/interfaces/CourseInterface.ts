import mongoose from "mongoose";
import { UserInterface } from "./UserInterface";

interface CourseInterface extends mongoose.Document {
  name: String;
  users: UserInterface[];
}

export { CourseInterface };
