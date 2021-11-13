import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "../config";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]!;
    const isCustomAuth = token?.length < 500;
    let decodeData: any;
    if (token && isCustomAuth) {
      decodeData = jwt.verify(token, process.env.JWT_SECRET!);
      req.body.userId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      req.body.userId = decodeData?.sub;
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

export default auth;
