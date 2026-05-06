import express from "express";
import { body, query, validationResult } from 'express-validator';
import { userModel } from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const userRoute = express.Router();

//============ /user/regisetr
userRoute.get('/register', (req, res) => {
    res.render('register');
})

userRoute.post('/register',

    body('username').trim().isLength({ min: 3 }),
    body('email').trim().isEmail().isLength({ min: 10 }),
    body('password').trim().isLength({ min: 5 })
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            })
        }

        const { username, email, password } = req.body;
        console.log("user pass:", password);

        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({
            username,
            email,
            password: hashPassword
        })
        res.json(newUser)

    })


userRoute.get('/login', (req, res) => {
    res.render('login')
})



userRoute.post('/login',
    body('username').trim().isLength({ min: 3 }),
    body('password').trim().isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: "Invalid data"
            });
        }
        const { username, password } = req.body;

        try {
            const user = await userModel.findOne({ username: username });

            if (!user) {
                return res.status(400).json({ message: "Username or Password is incorrect" });
            }

            console.log("Password from user input:", password);
            console.log("Stored hashed password:", user.password);

            let isMatch = await bcrypt.compare(user.password,password);
            console.log("Match ? ",isMatch);
            
            if (!isMatch) {
                console.log("Password comparison failed.");
                return res.status(400).json({ message: "Password is incorrect" });
            }

            console.log("JWT_SECRET:", process.env.JWT_SECRET);

            const token = jwt.sign(
                {
                    userId: userLogin._id,
                    username: userLogin.username,
                },
                process.env.JWT_SECRET
            );


            res.cookie('token', token);
            res.send('Logged in');
        } catch (err) {
            console.log("Error during login:", err);
            res.status(500).json({ message: "Internal server error" });
        }
    }
);
