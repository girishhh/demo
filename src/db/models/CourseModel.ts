import mongoose from "mongoose";
import { CourseInterface } from "src/interfaces/CourseInterface";
import { CourseSchema } from "../schemas/CourseSchema";

const CourseModel = mongoose.model<CourseInterface>("Course", CourseSchema);

export { CourseModel };
