import express from "express";
import {
  createNewUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../contollers/UserContollers.js";
import { registerValidator, loginValidator } from "../validation.js";
import validationErrors from "../validationErrors.js";
import verifyJWT from "../midlleware/verifyJWT.js";

const userRouter = express.Router();
// userRouter.use(verifyJWT);
userRouter.get("/users", getAllUsers);
userRouter.post("/auth/register", registerValidator, createNewUser);
userRouter.patch("/auth/update", updateUser);
userRouter.delete("/auth/delete", deleteUser);

export default userRouter;
