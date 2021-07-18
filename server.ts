import express from "express";
import { ResponseError } from "./src/interfaces/CommonInterface";
import { indexRouter } from "./src/routes/index";
import logger from "morgan";
import cookieParser from "cookie-parser";
import createError from "http-errors";
import http from "http";
import mongoose from "mongoose";

export class Server {
  private app: express.Express;
  private port: number = Number(process.env.PORT) || 3005;

  constructor() {
    this.app = express();
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
  }

  setDbConnection = async () => {
    await mongoose.connect("mongodb://localhost:27017/test", {
      useNewUrlParser: true,
    });
  };

  public setRoutes = () => {
    this.app.use("/", indexRouter);
    this.app.use(function (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      next(createError(404));
    });
  };

  public setErrorHandlers = () => {
    this.app.use(
      (
        err: ResponseError,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.status(err.status || 500);
        res.send({
          message: err.message,
          error: err,
        });
      }
    );
  };

  public startServer = () => {
    var httpServer = http.createServer(this.app);
    httpServer.listen(this.port);
    httpServer.on("error", this.onError);
    httpServer.on("listening", this.onServerListen);
  };

  private onServerListen = () => {
    console.log("App listening on port " + this.port);
    console.log("you are running in " + process.env.NODE_ENV + " mode.");
  };

  private onError = (err: any) => {
    switch (err.code) {
      case "EACCES":
        console.error("port requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error("port is already in use");
        process.exit(1);
        break;
      default:
        throw err;
    }
  };
}
