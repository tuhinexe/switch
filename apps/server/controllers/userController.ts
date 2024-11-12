import User from "../models/Users";
import { Request, Response } from "express";
import { generateToken } from "../utils/jwtUtils";
import bcrypt from "bcrypt";
import validator from "validator";
import Auth from "../services/Auth";
import { IUser } from "../../../shared/types";
import { Logger } from "../middlewares/logger";

const logger = new Logger();
const auth = new Auth();

const signUp = async (req: Request, res: Response) => {
  try {
    let data: IUser = req.body;
    let user = await auth.createUser(data);

    const token = auth.createToken(user);
    res.cookie("accesToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    const responseUser = {
      uuid: user.uuid,
      email: user.email,
      userName: user.userName,
      _id: user._id,
    };
    res.status(201).json(responseUser);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

const signIn = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data);
    // @ts-ignore
    const user = await auth.signIn(data);
    const token = auth.createToken(user);
    res.cookie("accesToken", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
    });

    const responseUser = {
      uuid: user.uuid,
      email: user.email,
      userName: user.userName,
      _id: user._id,
    };
    res.status(200).json(responseUser);
  } catch (error: any) {
    logger.error("Error Signing in: ", error);
    res.status(400).json({ message: error.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { uuid } = req.params;
    const user = await auth.getUser(uuid);
    res.status(200).json({ user });
  } catch (error: any) {
    logger.error(error.message);
    res.status(400).json({ error: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {};

export default { signUp, signIn, getUser, updateUser, deleteUser };
