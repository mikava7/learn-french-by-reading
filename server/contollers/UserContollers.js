import User from "../modules/User.js";
import Note from "../modules/Notes.js";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";

// @desc Get all users
// @route GET /users
// @access Private

export const getAllUsers = async (req, res) => {
  // Get all users from MongoDB
  const users = await User.find().select("-password ").lean();

  // If no users
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }

  res.json(users);
};

// @desc Create new user
// @route POST /users
// @access Private

export const createNewUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password, email, roles } = req.body;

    // Validate data
    if (!username || !password || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for duplicate username
    const duplicateUsername = await User.exists({ username });
    if (duplicateUsername) {
      return res.status(409).json({ message: "Duplicate username" });
    }

    // Check for duplicate email
    const duplicateEmail = await User.exists({ email });
    if (duplicateEmail) {
      return res.status(409).json({ message: "Duplicate email" });
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10); // salt rounds

    const newUser = {
      username,
      password: hashedPwd,
      email,
      roles: roles || ["free access"], // default to empty array if roles is not provided
    };
    const user = await User.create(newUser);
    // Respond with success message
    return res.status(201).json({ message: `New user ${username} created` });
  } catch (error) {
    console.error("Error creating user:", error);
    return res
      .status(500)
      .json({ message: error.message || "Failed to create user" });
  }
};

// @desc Update a user
// @route PATCH /users
// @access Private
export const updateUser = async (req, res) => {
  const { id, email, username, roles, active, password } = req.body;

  try {
    // Confirm data
    if (
      !id ||
      !username ||
      !email ||
      !Array.isArray(roles) ||
      !roles.length ||
      typeof active !== "boolean"
    ) {
      return res
        .status(400)
        .json({ message: "All fields except password are required" });
    }

    // Does the user exist to update?
    const user = await User.findById(id).exec();

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check for duplicate username
    const duplicateUsername = await User.findOne({ username })
      .collation({ locale: "en", strength: 2 })
      .lean()
      .exec();

    // Allow updates to the original user
    if (duplicateUsername && duplicateUsername._id.toString() !== id) {
      return res.status(409).json({ message: "Duplicate username" });
    }

    // Check for duplicate email
    const duplicateEmail = await User.findOne({ email })
      .collation({ locale: "en", strength: 2 })
      .lean()
      .exec();

    // Allow updates to the original user
    if (duplicateEmail && duplicateEmail._id.toString() !== id) {
      return res.status(409).json({ message: "Duplicate email" });
    }

    // Update user properties
    user.username = username;
    user.email = email;
    user.roles = roles;
    user.active = active;

    if (password) {
      // Hash password
      user.password = await bcrypt.hash(password, 10); // salt rounds
    }

    const updatedUser = await user.save();

    // Return success message with updated username and email
    res.json({
      message: `User with username ${updatedUser.username} and email ${updatedUser.email} updated`,
    });
  } catch (error) {
    // Handle any potential errors
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// @desc Delete a user
// @route DELETE /users
// @access Private
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;

    // Confirm data
    if (!id) {
      return res.status(400).json({ message: "User ID Required" });
    }

    // Does the user still have assigned notes?
    const note = await Note.findOne({ user: id }).lean().exec();
    if (note) {
      return res.status(400).json({ message: "User has assigned notes" });
    }

    // Does the user exist to delete?
    const user = await User.findById(id).exec();

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const result = await user.deleteOne();

    const reply = `Username ${result.username} with ID ${result._id} deleted`;

    res.json(reply);
  } catch (error) {
    console.error("Error deleting user:", error);
    return res.status(500).json({ message: "Failed to delete user" });
  }
};
