import mongoose from "mongoose";

const schema = mongoose.Schema;

const CourseSchema = new schema({
  name: String,
  users: [{ type: schema.Types.ObjectId, ref: "User" }],
});

export { CourseSchema };
