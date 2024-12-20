import { IUser } from "../../../shared/types";
import User from "../models/Users";
import { generateToken } from "../utils/jwtUtils";
import bcrypt from "bcrypt";
import validator from "validator";

class Auth {
  public async createUser(data: IUser) {
    try {
      if (!validator.isEmail(data.email)) {
        throw new Error("Invalid email address!");
      }

      if (data.password.length < 6) {
        console.log(data);
        throw new Error("Password must be at least 6 characters long!");
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(data.password, salt);
      data.password = hashedPassword;
      let user = await User.create(data);
      if (!user) {
        throw new Error("User not created!");
      }
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async signIn(data: { email: string; password: string }) {
    try {
      // @ts-ignore

      const user = await User.findByEmail(data.email);
      if (!user) {
        throw new Error("User not found!");
      }
      const isMatch = await bcrypt.compare(data.password, user.password);
      if (!isMatch) {
        throw new Error("Invalid credentials!");
      }
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getUser(uuid: string) {
    try {
      const user = await User.findOne({ uuid });
      if (!user) {
        throw new Error("User not found!");
      }
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public createToken(user: any) {
    return generateToken(user.uuid);
  }
}

export default Auth;
