import mongoose from "mongoose";

const schema = mongoose.Schema;

const BookSchema = new schema({
  title: String,
  owner: { type: schema.Types.ObjectId, ref: "User" },
});

export { BookSchema };
