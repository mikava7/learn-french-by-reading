import { body } from "express-validator";
// Validation for register endpoint
export const registerValidator = [
  body("password").isLength({ min: 5 }), // Check if password length is at least 5 characters
  body("email").isEmail(), // Check if email is valid
];
// Validation for login endpoint
export const loginValidator = [
  body("email").isEmail(), // Check if email is valid
  body("password").isLength({ min: 5 }), // Check if password length is at least 5 characters
];
