import mongoose from "mongoose";

const schema = mongoose.Schema;

const AccountSchema = new schema({
  accountNo: String,
  accountType: String,
  user: { type: schema.Types.ObjectId, ref: "User" },
});

export { AccountSchema };
