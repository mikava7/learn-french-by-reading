import express from "express";
import { registerUser, loginUser } from "../contollers/UserContollers.js";
import { registerValidator, loginValidator } from "../validation.js";
import validationErrors from "../validationErrors.js";
const userRouter = express.Router();

userRouter.post(
  "/auth/register",
  registerValidator,
  validationErrors,
  registerUser
);
userRouter.post("/auth/login", loginValidator, validationErrors, loginUser);
export default userRouter;
