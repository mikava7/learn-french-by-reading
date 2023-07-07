import { body, check } from "express-validator";
// Validation for register endpoint
export const registerValidator = [
  check("password").isLength({ min: 5 }), // Check if password length is at least 5 characters
  check("email").isEmail(), // Check if email is valid
  check("username").isLength({ min: 4 }),
];
// Validation for login endpoint
export const loginValidator = [
  body("email").isEmail(), // Check if email is valid
  body("password").isLength({ min: 5 }), // Check if password length is at least 5 characters
];
