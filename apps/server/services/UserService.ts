import User from "../models/Users";

class UserService {
  async getUser(uuid: string) {
    try {
      // @ts-ignore
      const user = await User.findByUuid(uuid);
      if (!user) {
        throw new Error("User not found!");
      }
      return user;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export default UserService;
