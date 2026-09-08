import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const userFound = await User.findOne({ email });
    if (userFound) {
      res.status(400).json({
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(200).json({
        message: "User created successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "User not found",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      res.status(400).json({
        message: "Incorrect password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      message: "User login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
