import { AccountModel } from "./AccountModel";
import { AccountSchema } from "../schemas/AccountSchema";

const CorporateAccountModel = AccountModel.discriminator(
  "CorporateAccount",
  AccountSchema
);

export { CorporateAccountModel };
