import express from "express";
import { login, refresh, logout } from "../contollers/authController.js";
import loginLimiter from "../midlleware/loginLimiter.js";
const authRouter = express.Router();

authRouter.post("/auth/login", loginLimiter, login);
authRouter.get("/auth/refresh", refresh);
authRouter.post("/auth/logout", logout);
export default authRouter;
