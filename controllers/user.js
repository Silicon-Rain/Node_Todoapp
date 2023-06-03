import { User } from "../models/user.js";

export const getAllUsers =  async (req,res) => {
    const users = await User.find({});
    res.json({
        success: true,
        users
    });
};

export const register = async (req,res) => {
    const {name,email,password} = req.body;
    console.log(req.body);
    await User.create({
        name:name,
        email:email,
        password:password
    });
    res.status(201).json({
        success: true,
        message: "Registered successfully"
    });
}

export const userbyid1 = async (req,res) => {
    const {id} = req.query;
    const user = await User.findById(id);
    res.json ({
        success:true,
        user
    });
}

export const userbyid2 = async (req,res) => {
    const {id} = req.body;
    const user = await User.findById(id);
    res.json ({
        success:true,
        user
    });
}

export const userbyid3 = async (req,res) => {
    const {id} = req.params;
    const user = await User.findById(id);
    res.json ({
        success:true,
        user
    });
}



