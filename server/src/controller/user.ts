import User from "../models/User";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import "../config";

const register = async (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    const emailExist = await User.findOne({ email: newUser.email });
    if (emailExist) {
      console.log(emailExist);
      return res.status(400).json("email already exist");
    }
    const userNameExist = await User.find({ userName: newUser.userName });
    if (userNameExist) {
      console.log(userNameExist);
      return res.status(400).json("userName already exist try something else");
    }
    newUser.password = await bcrypt.hash(req.body.password, 10);
    await User.create(newUser);
    return res.status(200).json("user created");
  } catch (err) {
    return res.status(404).json("something go wrong " + err);
  }
};

const login = async (req: Request, res: Response) => {
  const userDet = req.body;
  try {
    const user = await User.findOne({ userName: userDet.userName });
    if (!user) {
      return res.json({ message: "invalid userName" });
    }
    const isCorrect = await bcrypt.compare(userDet.password, user.password);

    if (!isCorrect)
      return res.json({ message: "userName and password don't match" });
    const payload = {
      id: user._id,
      userName: user.userName,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: 86400,
    });
    return res.status(200).json({ token, user });
  } catch (err) {
    console.log(err);
    return res.json({ message: "something go wrong" });
  }
};

const editUser = async (req: Request, res: Response) => {
  // const {userId}=req.body
  // await User.findById(userId);
};

export { register, login, editUser };
