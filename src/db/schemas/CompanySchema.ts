import mongoose from "mongoose";

const schema = mongoose.Schema;

const CompanySchema = new schema({
  name: String,
  subdomain: String,
  address: { type: schema.Types.ObjectId, ref: "Address" },
});

export { CompanySchema };
