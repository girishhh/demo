import mongoose from "mongoose";

const schema = mongoose.Schema;

const UserSchema = new schema({
  firstName: String,
  lastName: String,
  account: { type: schema.Types.ObjectId, ref: "Account" },
  books: [{ type: schema.Types.ObjectId, ref: "Book" }],
  courses: [{ type: schema.Types.ObjectId, ref: "Course" }],
});

export { UserSchema };
