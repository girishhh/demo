import express, { Router } from "express";
import { AccountModel } from "src/db/models/AccountModel";
import { UserModel } from "src/db/models/UserModel";
import { Document } from "mongoose";
import { BookModel } from "src/db/models/BookModel";
import { AddressModel } from "src/db/models/AddressModel";
import { CompanyModel } from "src/db/models/CompanyModel";
import { UserInterface } from "src/interfaces/UserInterface";
import { CompanyInterface } from "src/interfaces/CompanyInterface";
import { CourseModel } from "src/db/models/CourseModel";
import { CorporateAccountModel } from "src/db/models/CorporateAccountModel";

class IndexRouter {
  router: Router;
  constructor() {
    this.router = express.Router();
    this.createRoutes();
  }

  private createRoutes = () => {
    this.router.get("/", async (req, res, next) => {
      const account = new AccountModel({
        accountNo: "89898989899",
        // accountType: "normal",
      });
      const corporateAccount = new CorporateAccountModel({
        accountNo: "89898989899",
        // accountType: "corporate",
      });

      await corporateAccount.save();
      await account.save();

      // const accs = await CorporateAccountModel.find({
      //   accountNo: "89898989899",
      // });
      // console.log("SSSSSSSSSSSSSS", accs);

      res.send("SUCCESS");
    });
  };
}

export const indexRouter = new IndexRouter().router;
