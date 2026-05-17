import express from "express";
import { authMiddleware } from "../middleware/AuthMiddleware";
import { getProfile, getResume } from "../controllers/UserController";
import { upload } from "../middleware/uploadMiddleware";

const userRouter = express.Router();

userRouter.get("/profile", authMiddleware, getProfile);
userRouter.get("/resume/:id", getResume);

userRouter.post("/profile", authMiddleware, upload.single("resume"), updateProfile);

export default userRouter;