import User from "../models/Users";
import { Request, Response } from "express";
import { generateToken } from "../utils/jwtUtils";
import { z } from "zod";
import { UserType } from "../types/index";


const signUp = async (req: Request, res: Response) => {
    const data: UserType = req.body;
    try {
        const user = await User.create(data);
        if(!user) {
            res.status(400).json({message: "User not created!"});
            return;
        }
        const token = generateToken(user.uuid);
        res.cookie("accesToken", token, {httpOnly: true,secure: true, sameSite: "none"});
        res.status(201).json({user});
        
    } catch (error: any) {
        res.status(400).json({error: error.message});
    }
}

const signIn = async (req: Request, res: Response) => {
    const data: UserType = req.body;
    try {
        // @ts-ignore
        const user = await User.findByEmail(data.email);
        if(!user) {
            res.status(400).json({message: "User not found!"});
            return;
        }
        res.status(200).json({user, message: "Welcome back!"});
        
    } catch (error: any) {
        res.status(400).json({error: error.message});
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


