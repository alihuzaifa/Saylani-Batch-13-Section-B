import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user";
const secret = "13253mjbnmbcvbnvcxur76547e3";
// ODM  ===> Object Data Modelling
// ORM  ===> Object Relational Maping

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
        return res.send({
            message: `User already exists against this ${email}`,
        });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userObj = {
        name,
        email,
        password: hashedPassword,
    };
    await User.create(userObj);
    return res.send({
        message: `User created successfully`,
        user: userObj,
    });
};

const signinUser = async (req, res) => {
    const { email, password } = req.body;
    const userobj = await User.findOne({ email });
    if (!userobj) {
        return res.send({
            message: `User Not Found`,
        });
    }

    const passwordMatched = await bcrypt.compare(password, userobj.password);
    if (!passwordMatched) {
        return res.send({
            message: `Invalid Password`,
        });
    }

    const payload = {
        id: userobj?.id,
        email: userobj?.email,
    };

    const token = jwt.sign(payload, secret, { expiresIn: "1d" });
    return res.send({
        token,
        message: "Login Successfull",
    });
};

const getAllUsers = async (_, res) => {
    const allUsers = await User.find({});
    return res.send({
        allUsers,
    });
};

export { createUser, signinUser, getAllUsers };