import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserSchema from "../modules/UserSchema.js";
const secretKey = "JOANmadu365";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // create a new user object with hashed password and other input fields
    const newUser = await UserSchema.create({
      email,
      passwordHash: hash,
    });

    // create a JWT token with user id as payload
    const token = jwt.sign(
      {
        _id: newUser._id,
      },
      secretKey,
      {
        expiresIn: "7d",
      }
    );

    // remove passwordHash field from user object and return the user object with the JWT token
    const { passwordHash, ...userInfo } = newUser._doc;
    res.status(201).json({
      ...userInfo,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Registration failed",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //find user by email
    const user = await UserSchema.findOne({ email });

    // if user not found, return 404 status with error message
    if (!user) {
      return res.status(404).json({
        message: "Wrong password or login",
      });
    }

    //compare input password with hashed password
    const isValidPassword = await bcrypt.compare(
      password,
      user._doc.passwordHash
    );

    //if password is incorrect, return error message
    if (!isValidPassword) {
      return res.status(404).json({
        message: "Wrong password or login",
      });
    }

    // create a JWT token with user id as payload
    const token = jwt.sign(
      {
        _id: user._id,
      },
      secretKey,
      {
        expiresIn: "7d",
      }
    );

    // remove passwordHash field from user object and return the user object with the JWT token
    const { passwordHash, ...userInfo } = user._doc;
    res.status(201).json({
      ...userInfo,
      token,
    });
  } catch (error) {}
};
