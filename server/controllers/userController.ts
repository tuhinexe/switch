import User from "../models/Users";
import { Request, Response } from "express";
import { generateToken } from "../utils/jwtUtils";
import bcrypt from "bcrypt";
import validator from "validator";
import { UserType } from "../types/index";


const signUp = async (req: Request, res: Response) => {
    let data: UserType = req.body;

    if(!validator.isEmail(data.email)) {
        res.status(400).json({message: "Invalid email!"});
        return;
    }

    if(!validator.isStrongPassword(data.password, {minLength: 6}))   {
        res.status(400).json({message: "Passwords must be at least 6 characters long!"});
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;

    try {
        let user = await User.create(data);
        if(!user) {
            res.status(400).json({message: "User not created!"});
            return;
        }
        const token = generateToken(user.uuid);
        res.cookie("accesToken", token, {httpOnly: true,secure: true, sameSite: "none"});

        const responseUser = {
            uuid: user.uuid,
            email: user.email,
            userName: user.userName,
            _id : user._id
        }
        res.status(201).json(responseUser);
        
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}

const signIn = async (req: Request, res: Response) => {
    const data = req.body;
    try {
        // @ts-ignore
        const user = await User.findByEmail(data.email);
        if(!user) {
            res.status(400).json({message: "User not found!"});
            return;
        }
        const validPassword = await bcrypt.compare(data.password, user.password);
        if(!validPassword) {
            res.status(400).json({message: "Invalid password!"});
            return;
        }

        const token = generateToken(user.uuid);
        res.cookie("accesToken", token, {httpOnly: true,secure: true, sameSite: "none",expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)});
    
        const responseUser = {
            uuid: user.uuid,
            email: user.email,
            userName: user.userName,
            _id : user._id
        }
        res.status(200).json(responseUser);
        
    } catch (error: any) {
        console.log(error);
        res.status(400).json({message: error.message});
    }
}

const getUser = async (req: Request, res: Response) => {
    const {uuid} = req.params;
    try {
        // @ts-ignore
        const user = await User.findByUuid(uuid);
        if(!user) {
            res.status(400).json({message: "User not found!"});
            return;
        }
        res.status(200).json({user});
        
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}

const updateUser = async (req: Request, res: Response) => {

}

const deleteUser = async (req: Request, res: Response) => {
    
    }

export default {signUp, signIn, getUser, updateUser, deleteUser};


