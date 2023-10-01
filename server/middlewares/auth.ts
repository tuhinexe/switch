import { decodeToken } from "../utils/jwtUtils";
import User from "../models/Users";
import { Request, Response, NextFunction } from "express";

const checkAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.accessToken;
        if(!token){
            res.status(401).json({message: "You are not authorized!"})
            return;
        }
        const decodedToken = decodeToken(token);
        if(decodedToken === undefined){
            res.status(401).json({message: "You are not authorized!"})
            return;
        }
        // @ts-ignore
        const user = await User.findOne({id: decodedToken.id});
        if(!user){
            res.status(401).json({message: "You are not authorized!"})
            return;
        }
        // @ts-ignore
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

export default checkAuth;