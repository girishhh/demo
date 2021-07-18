import mongoose from "mongoose";
import { AccountInterface } from "./AccountInterface";
import { BookInterface } from "./BookInterface";
import { CourseInterface } from "./CourseInterface";

interface UserInterface extends mongoose.Document {
  firstName: string;
  lastName: string;
  account: AccountInterface;
  books: BookInterface[];
  courses: CourseInterface[];
}

export { UserInterface };
